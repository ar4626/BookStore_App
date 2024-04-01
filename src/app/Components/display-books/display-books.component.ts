import { Component } from '@angular/core';

@Component({
  selector: 'app-display-books',
  standalone: true,
  imports: [],
  templateUrl: './display-books.component.html',
  styleUrl: './display-books.component.scss'
})
export class DisplayBooksComponent {
  count : any = 128;
}
