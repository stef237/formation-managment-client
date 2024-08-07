import {Component, OnInit} from '@angular/core';
import { AdminService } from '../../../../auth/services/admin/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.scss'
})
export class AllStudentsComponent implements OnInit {

  students = [];
  displayedColumns: string[] = ['name', 'studentClass', 'email', 'address', 'birthDate', 'gender', 'actions'];


  constructor(private service: AdminService,
              private snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.getAllStudents().subscribe((res) => {
      console.log(res);
      this.students = res;
    })
  }

  deleteStudent(studentId:number){
    this.service.deleteStudent(studentId).subscribe((res) =>{
      console.log(res)
      this.getAllStudents();
      this.snackBar.open("Adhérent supprimé avec success","Close",{duration:5000})
    })
  }
}

