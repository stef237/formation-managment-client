import {Component, OnInit,} from '@angular/core';
import {AdminService} from "../../../../auth/services/admin/admin.service";
import { FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-all-seance',
  templateUrl: './all-seance.component.html',
  styleUrl: './all-seance.component.scss',

})
export class AllSeanceComponent implements OnInit{

  validateForm: FormGroup;
  seances= [];



  constructor(private service: AdminService,
              private snackBar:MatSnackBar
  ){}

  ngOnInit(){
    this.getAllSeances();
  }


  getAllSeances(){
    this.service.getAllSeances().subscribe((res) => {
      console.log(res);
      this.seances = res;
    })
  }

  deleteSeance(id:number){
    console.log(id)
    this.service.deleteSeance(id).subscribe((res) =>{
      console.log(res)
      this.getAllSeances();
      this.snackBar.open("Seance deleted successfully","Close",{duration:5000})
    })
  }


}
