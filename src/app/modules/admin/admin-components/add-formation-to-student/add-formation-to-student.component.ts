import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-formation-to-student',
  templateUrl: './add-formation-to-student.component.html',
  styleUrl: './add-formation-to-student.component.scss'
})
export class AddFormationToStudentComponent implements OnInit {


  validateForm: FormGroup;
  isSpinning:boolean = false;

  studentId: number = this.activatedRoute.snapshot.params['studentId'];

  duree: number | null = null;
  today: Date = new Date();
  DOMAINE: string[] = ["Qualité, Santé, Sécurité et Environnement",
    "Soft-Skills","Coaching","Management des organisations et Intelligence économique",
    "Not Specified"];



  constructor(private service:AdminService,
              private fb:FormBuilder,
              private snackBar:MatSnackBar,
              private router: Router,
              private activatedRoute:ActivatedRoute,

  ){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      name: ["", Validators.required],
      domaine: ["", Validators.required],
      description: ["", Validators.required],
      duree: [this.duree, Validators.required],
      theme: ["", Validators.required],
      code: ["", Validators.required],
      obtenu: ["", [Validators.required, this.minDateValidator(this.today)]],
      validite: ["", Validators.required],
      prix: ["", Validators.required],


    });
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

  postFormation(){
    console.log(this.validateForm.value);
    this.isSpinning = true;
    this.service.addFormationToStudent(this.studentId, this.validateForm.value).subscribe((res) =>{
      this.isSpinning = false;
      if (null != res["id"]) {
        this.snackBar.open("Formation enregistrée avec success", "Close", {duration: 5000});
        this.router.navigateByUrl('/admin/formations');
      } else {
        this.snackBar.open("Cette formation existe déjà", "Close", {duration: 5000})
        this.router.navigateByUrl('/admin/formations');
      }
    })
  }

}
