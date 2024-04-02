import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  // book: any = [{
  //   "bookId": 6,
  //   "bookName": "You Can",
  //   "description": "Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through the empowering self-help manual you can, penned to promote personal growth and well-being for anyone who reads it, George Matthew Adams talks about things to be done to pave your way to a fulfilling, successful life—such as sitting for an hour in silence to shape your creative vision, going the extra mile in serving others, letting your character rule your work, studying your mistakes, learning to use time, and many more. Inculcate these habits, and your life will change. A powerful guide that asserts that you can do anything you set your mind to, you can is filled with quotes imparting wisdom of a man whose teachings have inspired millions—napoleon Hill, and commentary by the executive director of the Napoleon Hill foundation, don M. Green. “You yourself determine the height to which you shall climb. Have you the summit in view?”.",
  //   "author": "George Matthew Adams",
  //   "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg",
  //   "book_price": 149,
  //   "discount_price": 129,
  //   "quantity": 10,
  //   "rating": 4.5,
  //   "createdAt": "31-Mar-2024 17:03",
  //   "lastUpdatedAt": "31-Mar-2024 17:03"
  // }]
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


