import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DisplayBooksComponent } from '../display-books/display-books.component';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';


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
  count: any = 0;
  token: any;

  constructor(
    private cartService: CartService
  ) {
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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCartCount();
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  getCartCount(): void{
    this.cartService.getCartCount().subscribe(
      (response: any) => {
        this.count = response.data;
        console.log(response.date);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
} 
