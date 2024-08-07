
import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../auth/services/admin/admin.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  certificats: any[] = [];
  formations: any[] = [];
  seances: any[] = [];
  teachers: any[] = [];
  permits: any[] = [];
  students: any[] = [];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }


  loadData(): void {
    this.service.getAllCertificats().subscribe(data => {
      this.certificats = data;
    });

    this.service.getAllFormations().subscribe(data => {
      this.formations = data;
    });
    this.service.getAllSeances().subscribe(data => {
      this.seances = data;
    });
    this.service.getAllTeachers().subscribe(data => {
      this.teachers = data;
    });
    this.service.getAllAppliedPermits().subscribe(data => {
      this.permits = data;
    });
    this.service.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }




}
