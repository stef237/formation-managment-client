import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-certificat',
  templateUrl: './post-certificat.component.html',
  styleUrl: './post-certificat.component.scss'
})
export class PostCertificatComponent implements OnInit{
  validateForm: FormGroup;
  isSpinning:boolean = false;
  date:FormControl ;
  today: Date = new Date();
  constructor(private service:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              private router:Router,
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
    this.service.addCertificat(this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if(res.id != null){
        this.snackBar.open("Certificat enregistré avec success","Close",{duration:5000});
        this.router.navigateByUrl('/admin/certificats');
      }else{
        this.snackBar.open("Le certificat existe déjà","Close",{duration:5000})
      }
    })
  }


}
