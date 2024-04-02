import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input() book:any;

  title!: string;
  author!: string;


  ngOnInit(): void {
    if (this.book && this.book.bookName.length > 23) {
      this.title = this.book.bookName.substring(0, 23) + "...";
    } else if (this.book) {
      this.title = this.book.bookName;
    }

    if (this.book && this.book.author.length > 23) {
      this.author = this.book.author.substring(0, 23) + "...";
    } else if (this.book) {
      this.author = this.book.author;
    }
  }
}


