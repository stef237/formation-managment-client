import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-certificat',
  templateUrl: './update-certificat.component.html',
  styleUrl: './update-certificat.component.scss'
})
export class UpdateCertificatComponent implements OnInit {

  certificatId: number = this.activatedRoute.snapshot.params["certificatId"];
  validateForm: FormGroup;
  isSpinning: boolean = false;
  date: FormControl;
  today: Date = new Date();

  constructor(private service: AdminService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
  ) {
  }

  ngOnInit() {

    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      obtenu: ["", Validators.required],
      validite: ["", [Validators.required, this.minDateValidator(this.today)]],
      description: ["", Validators.required],

    })
    this.getCertificatById();
  }

  minDateValidator(minDate: Date) {
    return (control: AbstractControl) => {
      const controlDate = new Date(control.value);
      if (controlDate < minDate) {
        return {matDatepickerMin: true};
      }
      return null;
    };
  }

  getCertificatById() {
    this.service.getCertificatById(this.certificatId).subscribe(
      (res) => {
        const certificat = res.certificatDto;
        this.validateForm.patchValue(certificat);
        console.log(res);
      })
  }

  updateCertificat() {
    this.service.updateCertificat(this.certificatId, this.validateForm.value).subscribe(
      (res) => {
        console.log(res);
        if (res.id != null) {
          this.snackBar.open("Les attributs du certificat ont été modifié avec success", "Close", {duration: 5000});
          this.router.navigateByUrl('/admin/certificats');
        } else {
          this.snackBar.open("certificat not found", "Close", {duration: 5000})
        }
      })
  }
}
