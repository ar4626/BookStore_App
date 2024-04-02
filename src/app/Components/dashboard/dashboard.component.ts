import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DisplayBooksComponent } from '../display-books/display-books.component';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    DisplayBooksComponent,
    RouterOutlet,
    RouterModule,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  name: any ;
  profileMenu: boolean = true;
  profileMenuSignin: boolean = true;
  count: any = 1;
  token: any;

  constructor() {
    this.token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : "";
    this.name = typeof localStorage !== 'undefined' ? localStorage.getItem('name') : "";
  }

  toggleProfileMenu(): void {
    if (this.token) {
      this.profileMenu = !this.profileMenu;
    }
    else {
      this.profileMenuSignin = !this.profileMenuSignin
    }
  }
} 
