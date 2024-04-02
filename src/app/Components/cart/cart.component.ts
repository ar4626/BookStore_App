import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  count: any = 2;
  quantity: any = 2;
  display: boolean = true;
  orderPortal: boolean = true;

  books:any= [
    {
      "bookId": 6,
      "bookName": "You Can",
      "description": "Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through the empowering self-help manual you can, penned to promote personal growth and well-being for anyone who reads it, George Matthew Adams talks about things to be done to pave your way to a fulfilling, successful life—such as sitting for an hour in silence to shape your creative vision, going the extra mile in serving others, letting your character rule your work, studying your mistakes, learning to use time, and many more. Inculcate these habits, and your life will change. A powerful guide that asserts that you can do anything you set your mind to, you can is filled with quotes imparting wisdom of a man whose teachings have inspired millions—napoleon Hill, and commentary by the executive director of the Napoleon Hill foundation, don M. Green. “You yourself determine the height to which you shall climb. Have you the summit in view?”.",
      "author": "George Matthew Adams",
      "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg",
      "book_price": 149,
      "discount_price": 1249,
      "quantity": 10,
      "rating": 4.5,
      "createdAt": "31-Mar-2024 17:03",
      "lastUpdatedAt": "31-Mar-2024 17:03"
    },
    {
      "bookId": 6,
      "bookName": "You Can",
      "description": "Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through the empowering self-help manual you can, penned to promote personal growth and well-being for anyone who reads it, George Matthew Adams talks about things to be done to pave your way to a fulfilling, successful life—such as sitting for an hour in silence to shape your creative vision, going the extra mile in serving others, letting your character rule your work, studying your mistakes, learning to use time, and many more. Inculcate these habits, and your life will change. A powerful guide that asserts that you can do anything you set your mind to, you can is filled with quotes imparting wisdom of a man whose teachings have inspired millions—napoleon Hill, and commentary by the executive director of the Napoleon Hill foundation, don M. Green. “You yourself determine the height to which you shall climb. Have you the summit in view?”.",
      "author": "George Matthew Adams",
      "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg",
      "book_price": 149,
      "discount_price": 129,
      "quantity": 10,
      "rating": 4.5,
      "createdAt": "31-Mar-2024 17:03",
      "lastUpdatedAt": "31-Mar-2024 17:03"
    }
  ]


  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
 