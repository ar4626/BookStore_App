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
}
