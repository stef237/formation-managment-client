import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule,} from '@angular-material-components/datetime-picker';
import {MatIconModule} from "@angular/material/icon";
import {MatCard, MatCardModule} from "@angular/material/card";
import { MtxDatetimepickerModule, } from '@ng-matero/extensions/datetimepicker';
import { MtxNativeDatetimeModule } from '@ng-matero/extensions/core';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";

import {MatListOption, MatSelectionList} from "@angular/material/list";
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

registerLocaleData(localeFr, 'fr');



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MtxDatetimepickerModule,
    MtxNativeDatetimeModule,
    MatSelectionList,
    MatListOption,
    MatCard,


  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MtxDatetimepickerModule,
    MtxNativeDatetimeModule,

  ],

  providers: [

    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher,},
    provideCharts(withDefaultRegisterables()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
