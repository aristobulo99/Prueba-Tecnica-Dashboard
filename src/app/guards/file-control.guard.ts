import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Covid19TimeSeriesDataService } from '../services/covid19-time-series-data.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)


export class fileControlGuard implements CanActivate{

  constructor(
    private router: Router
  ){
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(localStorage.getItem('fileCSV') == "existData"){
      return true;
    }
    this.router.navigate(['fileUpload']);
    return false
  }

};
