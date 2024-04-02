import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(
    private httpService: HttpService
  ) {
    this.token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : "";
  }

  getAllBooks(){
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        // 'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('https://localhost:44362/api/Book/GetAllBook',false,header);
  }

  getABook(reqData : any){
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        // 'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('https://localhost:44362/api/Book/GetABook?id='+reqData,false,header);
  }

}
