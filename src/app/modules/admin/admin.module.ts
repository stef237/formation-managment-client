import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { PostStudentComponent } from './admin-components/post-student/post-student/post-student.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

import {MatCardModule} from '@angular/material/card';
import { UpdateStudentComponent } from './admin-components/update-student/update-student.component';
import { PayFeeComponent } from './admin-components/pay-fee/pay-fee.component';
import { AllPermitsComponent } from './admin-components/all-permits/all-permits.component';
import {MatMenuModule} from '@angular/material/menu';
import { PostTeacherComponent } from './admin-components/post-teacher/post-teacher.component';
import { AllTeachersComponent } from './admin-components/all-teachers/all-teachers.component';
import { AllStudentsComponent } from './admin-components/all-students/all-students.component';
import { UpdateTeacherComponent } from './admin-components/update-teacher/update-teacher.component';
import {AllSeanceComponent} from "./admin-components/all-seance/all-seance.component";
import {PostSeanceComponent} from "./admin-components/post-seance/post-seance.component";
import {UpdateSeanceComponent} from "./admin-components/update-seance/update-seance.component";
import {PostFormationComponent} from "./admin-components/post-formation/post-formation.component";
import {UpdateFormationComponent} from "./admin-components/update-formation/update-formation.component";
import {AllCertificatComponent} from "./admin-components/all-certificat/all-certificat.component";
import {UpdateCertificatComponent} from "./admin-components/update-certificat/update-certificat.component";
import {PostCertificatComponent} from "./admin-components/post-certificat/post-certificat.component";

import {MatSlideToggle} from "@angular/material/slide-toggle";
import {CalendarCommonModule, CalendarDayModule, CalendarMonthModule, CalendarWeekModule} from "angular-calendar";
import {FlatpickrModule} from "angularx-flatpickr";
import {NgxMatDatetimePickerModule} from "@angular-material-components/datetime-picker";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatToolbar} from "@angular/material/toolbar";
import {MtxDatetimepickerModule} from "@ng-matero/extensions/datetimepicker";
import {MatIcon} from "@angular/material/icon";
import {FullCalendarModule} from "@fullcalendar/angular";
import {AllFormationComponent} from "./admin-components/all-formation/all-formation.component";
import {MatList, MatListItem} from "@angular/material/list";
import {AddCertificatToStudentComponent} from "./admin-components/add-certificat-to-student/add-certificat-to-student.component";
import {AddFormationToTeacherComponent} from "./admin-components/add-formation-to-teacher/add-formation-to-teacher.component";
import {AddSeanceToFormationComponent} from "./admin-components/add-seance-to-formation/add-seance-to-formation.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {
  AddFormationToStudentComponent
} from "./admin-components/add-formation-to-student/add-formation-to-student.component";



@NgModule({
  declarations: [
    DashboardComponent,
    PostStudentComponent,
    AllStudentsComponent,
    UpdateStudentComponent,
    PayFeeComponent,
    AllPermitsComponent,
    PostTeacherComponent,
    AllTeachersComponent,
    UpdateTeacherComponent,
    PostSeanceComponent,
    AllSeanceComponent,
    AllFormationComponent,
    UpdateSeanceComponent,
    PostFormationComponent,
    UpdateFormationComponent,
    AllCertificatComponent,
    UpdateCertificatComponent,
    PostCertificatComponent,
    AddSeanceToFormationComponent,
    AddFormationToTeacherComponent,
    AddCertificatToStudentComponent,
    AddFormationToStudentComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggle,
    CalendarDayModule,
    CalendarWeekModule,
    CalendarMonthModule,
    CalendarCommonModule,
    FlatpickrModule,
    NgxMatDatetimePickerModule,
    MatGridTile,
    MatGridList,
    MatToolbar,
    MtxDatetimepickerModule,
    MatIcon,
    FullCalendarModule,
    MatListItem,
    MatList,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderCell,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow,
  ]
})
export class AdminModule { }
