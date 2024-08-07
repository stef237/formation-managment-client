import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-all-formation',
  templateUrl: './all-formation.component.html',
  styleUrl: './all-formation.component.scss'
})
export class AllFormationComponent implements OnInit {
  formation: any = { file: '' }; // Remplacez par la source réelle des fichiers
  sanitizedFileUrl: SafeResourceUrl | null = null;
  fileType: string = '';

  formations = [];

  constructor(private service: AdminService,
              private snackBar:MatSnackBar,
              private sanitizer: DomSanitizer,
  ){}

  ngOnInit(){
    this.getAllFormations();
    if (this.formation.file) {
      this.updateFileDisplay(this.formation.file);
    }
  }
  updateFileDisplay(fileUrl: string) {
    // Créez une URL d'objet sécurisée
    this.sanitizedFileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileUrl);

    // Déduisez le type de fichier
    this.fileType = this.getFileType(fileUrl);
  }

  getFileType(fileUrl: string): string {
    if (fileUrl.endsWith('.pdf')) {
      return 'application/pdf';
    }
    return '';
  }

  isPdf(fileUrl: string): boolean {
    return fileUrl.endsWith('.pdf');
  }


  getAllFormations(){
    this.service.getAllFormations().subscribe((res) => {
      console.log(res);
      this.formations = res;
    })
  }

  deleteFormation(id:number){
    console.log(id)
    this.service.deleteFormation(id).subscribe((res) =>{
      console.log(res)
      this.getAllFormations();
      this.snackBar.open("Formation supprimée avec success","Close",{duration:5000})
    })
  }
}
