import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-seance',
  templateUrl: './update-seance.component.html',
  styleUrl: './update-seance.component.scss'
})
export class UpdateSeanceComponent implements OnInit {

  seanceId: number = this.activatedRoute.snapshot.params['seanceId'];
  validateForm: FormGroup;
  isSpinning:boolean = false;
  date:FormControl ;
  today: Date = new Date();



  constructor(private service:AdminService,
              private fb:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private snackBar:MatSnackBar,
              private router:Router,
  ){}

  ngOnInit(){
    this.getSeanceById();
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

  getSeanceById(){
    this.service.getSeanceById(this.seanceId).subscribe((res)=>{
      const seance = res.seanceDto;
      this.validateForm.patchValue(seance);
      console.log(res);
    })
  }

  updateSeance(){
    this.service.updateSeance(this.seanceId,this.validateForm.value).subscribe((res) =>{
      console.log(this.validateForm.value);
      if(res.id != null){
        this.snackBar.open("Seance modifier avec success","Close",{duration:5000});
        this.router.navigateByUrl('/admin/seances');
      }else{
        this.snackBar.open("Seance existe","Close",{duration:5000})
      }
    })
  }


}
