import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { adminGuard } from '../../auth/guards/admin/admin.guard';
import { PostStudentComponent } from './admin-components/post-student/post-student/post-student.component';

import { UpdateStudentComponent } from './admin-components/update-student/update-student.component';
import { PayFeeComponent } from './admin-components/pay-fee/pay-fee.component';
import { AllPermitsComponent } from './admin-components/all-permits/all-permits.component';
import { PostTeacherComponent } from './admin-components/post-teacher/post-teacher.component';
import { AllStudentsComponent } from './admin-components/all-students/all-students.component';
import { AllTeachersComponent } from './admin-components/all-teachers/all-teachers.component';
import { UpdateTeacherComponent } from './admin-components/update-teacher/update-teacher.component';
import {AllSeanceComponent} from "./admin-components/all-seance/all-seance.component";
import {PostSeanceComponent} from "./admin-components/post-seance/post-seance.component";
import {UpdateSeanceComponent} from "./admin-components/update-seance/update-seance.component";
import {AllFormationComponent} from "./admin-components/all-formation/all-formation.component";
import {PostFormationComponent} from "./admin-components/post-formation/post-formation.component";
import {UpdateFormationComponent} from "./admin-components/update-formation/update-formation.component";
import {AllCertificatComponent} from "./admin-components/all-certificat/all-certificat.component";
import {PostCertificatComponent} from "./admin-components/post-certificat/post-certificat.component";
import {UpdateCertificatComponent} from "./admin-components/update-certificat/update-certificat.component";
import {
  AddCertificatToStudentComponent
} from "./admin-components/add-certificat-to-student/add-certificat-to-student.component";
import {
  AddFormationToTeacherComponent
} from "./admin-components/add-formation-to-teacher/add-formation-to-teacher.component";
import {
  AddSeanceToFormationComponent
} from "./admin-components/add-seance-to-formation/add-seance-to-formation.component";
import {
  AddFormationToStudentComponent
} from "./admin-components/add-formation-to-student/add-formation-to-student.component";


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent, canActivate:[adminGuard]},
  {path:"student",component:PostStudentComponent, canActivate:[adminGuard]},
  {path:"students",component:AllStudentsComponent, canActivate:[adminGuard]},
  {path:"student/:studentId",component:UpdateStudentComponent, canActivate:[adminGuard]},
  {path:"fee/:studentId",component:PayFeeComponent, canActivate:[adminGuard]},
  {path:"permits",component:AllPermitsComponent, canActivate:[adminGuard]},
  {path:"teacher",component:PostTeacherComponent, canActivate:[adminGuard]},
  {path:"teachers",component:AllTeachersComponent, canActivate:[adminGuard]},
  {path:"teacher/:teacherId",component:UpdateTeacherComponent, canActivate:[adminGuard]},

  {path: "seances", component:AllSeanceComponent, canActivate:[adminGuard]},
  {path: "seance", component:PostSeanceComponent, canActivate:[adminGuard]},
  {path: "seance/:seanceId", component:UpdateSeanceComponent, canActivate:[adminGuard]},
  {path: "formations", component:AllFormationComponent, canActivate:[adminGuard]},
  {path: "formation", component:PostFormationComponent, canActivate:[adminGuard]},
  {path: "formation/:formationId", component:UpdateFormationComponent, canActivate:[adminGuard]},
  {path: "certificats", component:AllCertificatComponent, canActivate:[adminGuard]},
  {path: "certificat", component:PostCertificatComponent, canActivate:[adminGuard]},
  {path: "certificat/:certificatId", component:UpdateCertificatComponent},
  // {path: "chat", component: HomeChatComponent, canActivate:[adminGuard]},
  {path: "formation/:formationId/seance", component: AddSeanceToFormationComponent, canActivate:[adminGuard]},
  {path: "teacher/:teacherId/formation", component: AddFormationToTeacherComponent, canActivate:[adminGuard]},
  {path: "student/:studentId/formation", component: AddFormationToStudentComponent, canActivate:[adminGuard]},
  {path: "student/:studentId/certificat", component: AddCertificatToStudentComponent, canActivate:[adminGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
