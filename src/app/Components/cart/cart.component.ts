import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Services/cart/cart.service';
import { BookService } from '../../Services/book/book.service';



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
  quantity: any = 2;
  display: boolean = true;
  orderPortal: boolean = true;

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) { }



  cartItems: any[] = [];
  bookDetails: { [key: number]: any } = {};
  totalPrice: any = 0;



  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.displayAllCart();

  }

  displayAllCart(): void {
    this.cartService.getAllCartItem().subscribe(
      (response: any) => {
        this.cartItems = response.data;
        console.log(this.cartItems)
        this.calculateTotalPrice();
        this.fetchBookDetails();
      },
      (error: any) => {
        console.log('Request Failed', error);
      }
    );
  }


  // if (this.book && this.book.author.length > 23) {
  //   this.author = this.book.author.substring(0, 23) + "...";
  // } else if (this.book) {
  //   this.author = this.book.author;
  // }

  fetchBookDetails(): void {
    for (const cartItem of this.cartItems) {
      this.bookService.getABook(cartItem.bookId).subscribe(
        (response: any) => {
          this.bookDetails[cartItem.bookId] = response.data;

          //resizing the book name
          if (this.bookDetails[cartItem.bookId].bookName.length > 22) {
            this.bookDetails[cartItem.bookId].bookName = this.bookDetails[cartItem.bookId].bookName.substring(0, 22) + "...";
          } else if (this.bookDetails[cartItem.bookId]) {
            this.bookDetails[cartItem.bookId].bookName = this.bookDetails[cartItem.bookId].bookName
          }

          //resizing author name
          if (this.bookDetails[cartItem.bookId].author.length > 22) {
            this.bookDetails[cartItem.bookId].author = this.bookDetails[cartItem.bookId].author.substring(0, 22) + "...";
          } else if (this.bookDetails[cartItem.bookId]) {
            this.bookDetails[cartItem.bookId].author = this.bookDetails[cartItem.bookId].author
          }


          console.log(this.bookDetails[cartItem.bookId])
        },
        (error: any) => {
          console.log('Failed to fetch book details for Book ID:', cartItem.bookId, error);
        }
      );
    }
  }

  calculateTotalPrice(): void {
    this.totalPrice = 0;
    for (const cartItem of this.cartItems) {
      this.totalPrice += cartItem.price;
    }
  }
}
