import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-post-seance',
  templateUrl: './post-seance.component.html',
  styleUrl: './post-seance.component.scss'
})


export class PostSeanceComponent implements OnInit {


  validateForm: FormGroup;
  isSpinning:boolean = false;
  date:FormControl ;
  today: Date = new Date();

  constructor(private service:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
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

  postSeance(){
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addSeance(this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if(res.id != null){
        this.snackBar.open("Seance ajoutée avec success","Close",{duration:5000});
      }else{
        this.snackBar.open("Seance existe déjà","Close",{duration:5000})
      }
    })
  }

}
