import {Component, OnInit} from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss'
})
export class UpdateStudentComponent implements OnInit {

  studentId:number = this.activatedRoute.snapshot.params["studentId"]

  CLASS: string[] = ["Baccalauréat", "Préparatoire", "Licence", "Master", "Ingénieur", "Docteur", "Autre"];

  GENDER: string[] = ["Homme", "Femme", "Non Spécifié"];

  isSpinning:boolean;

  validateForm:FormGroup

  constructor(private service:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              private activatedRoute:ActivatedRoute,
              private router:Router,
  ){}

  ngOnInit(){

    this.validateForm = this.fb.group({
      email: ["", Validators.required],
      name: ["", Validators.required],
      studentClass: ["", Validators.required],
      birthDate: ["", Validators.required],
      address: ["", Validators.required],
      gender: ["", Validators.required]
    })
    this.getStudentById();


  }


  getStudentById(){
    this.service.getStudentById(this.studentId).subscribe((res)=>{
      const student = res.studentDto;
      this.validateForm.patchValue(student);
      console.log(res);
    })
  }


  updateStudent(){
    this.service.updateStudent(this.studentId,this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.snackBar.open("Adhérent modifier avec success","Close",{duration:5000});
        this.router.navigateByUrl('/admin/students');

      }else{
        this.snackBar.open("Adhérent non trouvé","Close",{duration:5000})
      }
    })
  }


}
