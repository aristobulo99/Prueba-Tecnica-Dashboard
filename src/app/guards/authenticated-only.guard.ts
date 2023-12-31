import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class authenticatedOnlyGuard implements CanActivate {

  constructor(
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(localStorage.getItem('userName') == "ADMIN"){
      return true;
    }
    this.router.navigate(['login']);
    return false
  }

};
