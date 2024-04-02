import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DisplayBooksComponent } from '../display-books/display-books.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    DisplayBooksComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  name : string = 'Ankit';
  profileMenu : boolean = true;
  count : any = 1;

  toggleProfileMenu(): void {
    this.profileMenu = !this.profileMenu;
}
}
