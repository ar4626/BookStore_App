import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;

  constructor(
    private httpService: HttpService
  ) {
    this.token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : "";
  }

  getAllCartItem(){
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getServiceToken('https://localhost:44362/api/Cart/GetCartItems',true,header);
  }

  removeCartItem(cartId:any){
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService('https://localhost:44362/api/Cart/DeleteCartItem?cartId='+cartId,true,header);
  }

  addToCart(bookId:any){
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44362/api/Cart/AddToCart?bookId='+bookId,"",true,header);
  }
}
