import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-display-books',
  standalone: true,
  imports: [
    BookCardComponent
  ],
  templateUrl: './display-books.component.html',
  styleUrl: './display-books.component.scss'
})
export class DisplayBooksComponent {
  count : any = 128;
}
