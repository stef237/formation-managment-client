import { Component } from '@angular/core';
import {FooterComponent} from "./sharepage/footer/footer.component";
import {NavbarComponent} from "./sharepage/navbar/navbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  standalone: true
})
export class HomeComponent {}
