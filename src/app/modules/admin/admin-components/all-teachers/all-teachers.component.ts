import {Component, OnInit} from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrl: './all-teachers.component.scss'
})
export class AllTeachersComponent implements OnInit{

  teachers = [];

  constructor(private service: AdminService,
              private snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllTeachers();
  }

  getAllTeachers(){
    this.service.getAllTeachers().subscribe((res) => {
      console.log(res);
      this.teachers = res;
    })
  }

  deleteTeacher(teacherId:number){
    console.log(teacherId)
    this.service.deleteTeacher(teacherId).subscribe((res) =>{
      console.log(res)
      this.getAllTeachers();
      this.snackBar.open("Formateur supprimé avec success","Close",{duration:5000})
    })
  }
}
