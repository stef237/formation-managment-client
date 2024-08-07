import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../student-service/student.service";

class BabelFile {
}

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrl: './detail-formation.component.scss'
})
export class DetailFormationComponent implements OnInit {

  formation: any = { file: '' }; // Remplacez par la source réelle des fichiers
  sanitizedFileUrl: SafeResourceUrl | null = null;
  fileType: string = '';
  validateForm: FormGroup;
  isSpinning:boolean = false;
  formationId: number = this.activatedRoute.snapshot.params['formationId'];
  duree: number | null = null;
  today: Date = new Date();
  selectedFiles: any;
  formations : any = [];

  constructor(private service: AdminService,
              private service1: StudentService,
              private snackBar:MatSnackBar,
              private sanitizer: DomSanitizer,
              private fb: FormBuilder,
              private router:Router,
              private activatedRoute:ActivatedRoute,
  ){}



  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.service.getAllFormations().subscribe(data => {
      this.formations = data;
    });
  }

  addFormation(formationId: number): void {
    this.service1.addFormationToStudent(formationId).subscribe(
      response => {
        this.snackBar.open('Formation ajoutée à votre liste personnelle.', 'Fermer', {
          duration: 3000
        });
      },
      error => {
        this.snackBar.open('Erreur lors de l\'ajout de la formation.', 'Fermer', {
          duration: 3000
        });
      }
    );
  }

  isPdf(file: ((successCallback: FileCallback, errorCallback?: ErrorCallback) => void) | string | {
    request: string;
    resolved: string
  } | BabelFile) {

  }
}
