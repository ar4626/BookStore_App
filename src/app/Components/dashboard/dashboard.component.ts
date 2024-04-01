import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  name : string = 'Ankit';
  profileMenu : boolean = true;
  count : any = 2;

  toggleProfileMenu(): void {
    this.profileMenu = !this.profileMenu;
}
}
