import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrl: './update-teacher.component.scss'
})
export class UpdateTeacherComponent implements OnInit {

  teacherId:number = this.activatedRoute.snapshot.params["teacherId"]
  GENDER: string[] = ["Homme", "Femme", "Non Spécifié"];

  validateForm: FormGroup;
  isSpinning:boolean = false;

  constructor(private service:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              private activatedRoute:ActivatedRoute,
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

    this.getTeacherById();
  }

  getTeacherById(){
    this.service.getTeacherById(this.teacherId).subscribe((res)=>{
      const teacher = res.teacherDto;
      this.validateForm.patchValue(teacher);
      console.log(res);
    })
  }


  updateTeacher(){
    this.service.updateTeacher(this.teacherId,this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.snackBar.open("Formateur modifier avec success","Close",{duration:5000});
        this.router.navigateByUrl('/admin/teachers');
      }else{
        this.snackBar.open("Formateur non trouvé","Close",{duration:5000})
      }
    })
  }

}
