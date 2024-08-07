import {Component, OnInit} from '@angular/core';
import { StudentService } from '../student-service/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.scss',

})
export class UpdateStudentComponent implements OnInit{


  CLASS: string[] = ["Baccalauréat", "Préparatoire", "Licence", "Master", "Ingénieur", "Docteur", "Autre"];

  GENDER: string[] = ["Homme", "Femme", "Non Spécifié"];
  student:any;
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
    private service: StudentService,
    private fb: FormBuilder,
    private snackBar:MatSnackBar,

  ) { }

  ngOnInit(): void {
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
    this.service.getStudentById().subscribe((res) =>{
      console.log(res);
      const student = res.studentDto;
      this.validateForm.patchValue(student);
    })
  }

  updateStudent(){
    this.isSpinning= true;
    this.service.updateStudent(this.validateForm.value).subscribe((res) =>{
      console.log(res);
      this.isSpinning = false;
      if(res.id != null){
        this.snackBar.open("Profil modifier avec success","Close",{duration:5000})
        this.getStudentById();
      }else{
        this.snackBar.open("Profil non trouvé","Close",{duration:5000})
      }
    })
  }
}
