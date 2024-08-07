import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-certificat-to-student',
  templateUrl: './add-certificat-to-student.component.html',
  styleUrl: './add-certificat-to-student.component.scss'
})
export class AddCertificatToStudentComponent implements OnInit {


  studentId: number = this.activatedRoute.snapshot.params['studentId'];
  validateForm: FormGroup;
  isSpinning:boolean = false;
  date:FormControl ;
  today: Date = new Date();
  constructor(private service:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              private router: Router,
              private activatedRoute:ActivatedRoute,
  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      obtenu: ["", Validators.required],
      validite: ["", [Validators.required, this.minDateValidator(this.today)]],
      description: ["", Validators.required],

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
  postCertificat(){
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addCertifToUser(this.studentId,this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if(res["id"] != null){
        this.snackBar.open("Certificat enregistré avec success","Close",{duration:5000});

      }else{
        this.snackBar.open("Le certificat existe déjà","Close",{duration:5000})

      }
    })
  }

}
