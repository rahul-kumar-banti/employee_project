
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Injectable()
export class PageAuthenticationGuardService implements CanActivate{
 loginStatus:boolean;
  constructor(private _authservice:AuthService,private _router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this._authservice.userLoginState()){
      return true;
    }
    else{
      
 this._router.navigate(['/login'],{queryParams:{"lastUrl": Array(route.url)}});
    }
  }
}
