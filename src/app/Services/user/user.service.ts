import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // constructor() { }
  token : any;
  constructor(private httpService : HttpService)
  {
    // this.token = localStorage?.getItem('token');
  }

  register(reqData: any){
    let header = {
      headers: new HttpHeaders({
          'content-type': 'application/json',
          // 'Authorization': 'token'
      })
    }
    return this.httpService.postService('https://localhost:44362/api/User/Register',reqData,false,header)
  }
}
