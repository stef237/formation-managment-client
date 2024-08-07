import {Component, OnInit} from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-teacher',
  templateUrl: './post-teacher.component.html',
  styleUrl: './post-teacher.component.scss'
})
export class PostTeacherComponent implements OnInit {

  GENDER: string[] = ["Homme", "Femme", "Non Spécifié"];

  validateForm: FormGroup;
  isSpinning:boolean = false;

  constructor(private service:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              private router:Router,
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      department: ["", Validators.required],
      qualification: ["", Validators.required],
      birthDate: ["", Validators.required],
      address: ["", Validators.required],
      gender: ["", Validators.required]
    })
  }

  postTeacher(){
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addTeacher(this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if(res.id != null){
        this.snackBar.open("Formateur ajouté avec success","Close",{duration:5000});
        this.router.navigateByUrl('/admin/teachers');
      }else{
        this.snackBar.open("Formateur existe déjà","Close",{duration:5000})
      }
    })
  }

}
