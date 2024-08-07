import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminService} from "../../../../auth/services/admin/admin.service";

@Component({
  selector: 'app-add-seance-to-formation',
  templateUrl: './add-seance-to-formation.component.html',
  styleUrl: './add-seance-to-formation.component.scss'
})
export class AddSeanceToFormationComponent implements OnInit{


  validateForm: FormGroup;
  isSpinning:boolean = false;
  formationId: number = this.activatedRoute.snapshot.params['formationId'];


  today: Date = new Date();


  constructor(private service: AdminService,
              private activatedRoute:ActivatedRoute,
              private fb: FormBuilder,
              private snackBar:MatSnackBar,
              private router:Router,
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      obtenu: ["", [Validators.required, this.minDateValidator(this.today)]],
      validite: ["", [Validators.required, this.dateAfter('debut'),this.minDateValidator(this.today) ]],

    })

  }



  minDateValidator(minDate: Date) {
    return (control: AbstractControl) => {
      const controlDate = new Date(control.value);
      if (controlDate < minDate) {
        return { matDatepickerMin: true };
      }
      return null;
    };
  }

  dateAfter(otherControlName: string) {
    return (control: FormControl) => {
      const otherControl = control.parent?.get(otherControlName);
      if (otherControl && control.value <= otherControl.value) {
        return { matDatepickerMin: true };
      }
      return null;
    };
  }


  addSeance() {
    this.service.addSeanceToF(this.formationId, this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if (res.id != null) {
        this.snackBar.open("Seance ajouter avec successfully", "SUCCESS", { duration: 5000 });
        this.router.navigateByUrl('/admin/seances');
      } else {
        this.snackBar.open("Seance existe ", "ERROR", { duration: 5000 });
        this.router.navigateByUrl('/admin/seances');
      }
    })
  }


}
