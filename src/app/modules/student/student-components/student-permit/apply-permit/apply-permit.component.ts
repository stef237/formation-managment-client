import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from '../../student-service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apply-permit',
  templateUrl: './apply-permit.component.html',
  styleUrl: './apply-permit.component.scss'
})
export class ApplyPermitComponent implements OnInit{


  isSpinning =  false;
  validateForm! : FormGroup;

  constructor(
    private service: StudentService,
    private fb: FormBuilder,
    private snackBar:MatSnackBar,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      subject: ["", Validators.required],
      body: ["", Validators.required],
    });
  }

  applyPermit() {
    this.isSpinning = true;
    console.log(this.validateForm.value);
    this.service.applyPermit(this.validateForm.value).subscribe(
      (res) => {
      console.log(res);
      this.isSpinning = false;
      if (res.id != null) {
        this.snackBar.open("Demande envoyé avec success", "SUCCESS", { duration: 5000 });
        this.router.navigateByUrl('/student/dashboard');
      } else {
        this.snackBar.open("Something went wrong", "ERROR", { duration: 5000 });
      }
    },
      );
  }

}
