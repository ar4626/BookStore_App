import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../Services/book/book.service';
import { error } from 'console';
import { CartService } from '../../Services/cart/cart.service';
import { response } from 'express';

interface CartItem {
  bookId: number; 
  quantity: number;
}

@Component({
  selector: 'app-book-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './book-view.component.html',
  styleUrl: './book-view.component.scss'
})
export class BookViewComponent {
  // book : any = {
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
  // };
  displayAddCart: boolean=true;
  bookId: any;
  book:any={};
  carts:any=[];
  cart:any;
  quantity: any;

  constructor(
    private bookService: BookService,
    private activeRoute: ActivatedRoute,
    private cartService: CartService,
  ){
    this.bookId = this.activeRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.checkBookInCart(this.bookId);
    this.getBook();
  }

  checkBookInCart(bookId: number):any{
    this.cartService.checkBookInCart(bookId).subscribe(
      (response:any)=>{
        this.cart=response.data;
        this.displayAddCart = false;
        this.quantity=response.data.quantity;
        console.log("cart me already hai ", this.cart)
      }
    )
  }

  getBook(): any{
    this.bookService.getABook(this.bookId).subscribe(
      (response: any) => {
        this.book = response.data;
        // console.log(response.data);
      },(error:any) => {
        console.log('Request Failed', error);
      }
    )
  }

  addToCart(): any{
    this.cartService.addToCart(this.bookId).subscribe(
      (response: any) =>{
        console.log("Added to Cart",response.data);
        this.checkBookInCart(this.bookId);
      } ,
      (error: any) => {
        console.log('Request Failed', error);
      }
    )
  }

  getCartItems(): any{
    this.cartService.getAllCartItem().subscribe(
      (response: any) =>{
        this.carts = response.data;
        console.log("Cart Fetched",response.data);
      } ,
      (error: any) => {
        console.log('Request Failed', error);
      }
    )
  }

  updateCartQuantity(bookId: any, quantity: any): void {
    this.cartService.updateCartQuantity(bookId, quantity).subscribe(
      (response: any) => {
        console.log("Cart Quantity Updated " + response.data);
        this.checkBookInCart(bookId);
      },
      (error: any) => {
        console.log('Failed to update quantity', error);
      }
    )
  }


}
 