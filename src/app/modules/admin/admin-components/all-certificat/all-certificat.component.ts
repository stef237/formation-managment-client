import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../../auth/services/admin/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-all-certificat',
  templateUrl: './all-certificat.component.html',
  styleUrl: './all-certificat.component.scss'
})
export class AllCertificatComponent implements OnInit {

  certificats =[];

  constructor(private service: AdminService,
              private snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllCertificats();
  }


  getAllCertificats(){
    this.service.getAllCertificats().subscribe((res) => {
      console.log(res);
      this.certificats = res;
    })
  }

  deleteCertificat(id:number){
    console.log(id)
    this.service.deleteCertificat(id).subscribe((res) =>{
      console.log(res)
      this.getAllCertificats();
      this.snackBar.open("Certificat supprimé avec success","Close",{duration:5000})
    })
  }
}
