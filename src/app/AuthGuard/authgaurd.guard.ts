import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Auth/auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate{
  constructor(
    private auth : AuthService,
    private route : Router
  ){};

  canActivate(): boolean {
    if(! this.auth.gettoken()){
      this.route.navigateByUrl('/login');
    }
    return this.auth.gettoken();
  }
}
// export const authgaurdGuard: CanActivateFn = (route, state) => {
//   return true;
// };
