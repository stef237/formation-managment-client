import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-student',
  templateUrl: './post-student.component.html',
  styleUrl: './post-student.component.scss'
})
export class PostStudentComponent implements OnInit {

  CLASS: string[] = ["Baccalauréat", "Préparatoire", "Licence", "Master", "Ingénieur", "Docteur", "Autre"];

  GENDER: string[] = ["Homme", "Femme", "Non Spécifié"];


  isSpinning: boolean;
  validateForm: FormGroup;


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true }
    } else if (control.value !== this.validateForm.controls["password"].value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  constructor(
    private service: AdminService,
    private fb: FormBuilder,
    private snackBar:MatSnackBar,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ["", Validators.required],
      name: ["", Validators.required],
      password: ["", Validators.required],
      checkPassword: ["", Validators.required,this.confirmationValidator],
      studentClass: ["", Validators.required],
      birthDate: ["", Validators.required],
      address: ["", Validators.required],
      gender: ["", Validators.required]
    })
  }

  postStudent() {
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addStudent(this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if(res.id != null){
        this.snackBar.open("Adhérent ajouté avec success","Close",{duration:5000});
        this.router.navigateByUrl('/admin/students');
      }else{
        this.snackBar.open("Cet adhérent existe  déjà","Close",{duration:5000})
      }
    })
  }


}
