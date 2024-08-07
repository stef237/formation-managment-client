import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrl: './update-formation.component.scss'
})
export class UpdateFormationComponent implements OnInit {

  validateForm: FormGroup;
  isSpinning:boolean = false;
  formationId: number = this.activatedRoute.snapshot.params['formationId'];
  duree: number | null = null;
  today: Date = new Date();
  selectedFiles: any;

  DOMAINE: string[] = ["Qualité, Santé, Sécurité et Environnement",
    "Soft-Skills","Coaching","Management des organisations et Intelligence économique",
    "Non Spécifié"];


  constructor(private service: AdminService,
              private activatedRoute:ActivatedRoute,
              private fb: FormBuilder,
              private snackBar:MatSnackBar,
              private router:Router,
  ){}

  ngOnInit(){
    this.getFormationById();
    this.validateForm = this.fb.group (
      {
        name: ["", Validators.required],
        domaine: ["", Validators.required],
        description: ["", Validators.required],
        duree: ["", Validators.required],
        theme: ["", Validators.required],
        code: ["", Validators.required],
        obtenu: ["", [Validators.required, this.minDateValidator(this.today)]],
        validite: ["", Validators.required],
        prix: ["", Validators.required],
        file: [""],

      })

    // Listen to changes in the form
    this.validateForm.valueChanges.subscribe(() => {
      this.calculateNumberOfDays();
    });
  }

  calculateNumberOfDays(): void {
    const debut = this.validateForm.get('obtenu')?.value;
    const fin = this.validateForm.get('validite')?.value;


    if (debut && fin) {
      const debutDate = new Date(debut);
      const finDate = new Date(fin);

      if (finDate < debutDate) {
        this.validateForm.get('validite')?.setErrors({ matDatepickerMin: true });
      } else {
        this.validateForm.get('validite')?.setErrors(null);
        const diff = Math.abs(finDate.getTime() - debutDate.getTime());
        this.duree = Math.ceil(diff / (1000 * 3600 * 24));
      }
    } else {
      this.duree = null;
    }
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



  getFormationById(){
    this.service.getFormationById(this.formationId).subscribe((res)=>{
      const formation = res.formationDto;
      this.validateForm.patchValue(formation);
      console.log(res);
    })
  }


  updateFormation(){
    this.service.updateFormation(this.formationId,this.validateForm.value).subscribe((res) =>{
      console.log(res);
      if(res.id != null){
        this.snackBar.open("Formation update successfully","Close",{duration:5000});
        this.router.navigateByUrl('/admin/formations');
      }else{
        this.snackBar.open("Formation already exist","Close",{duration:5000})
      }
    })
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


}
