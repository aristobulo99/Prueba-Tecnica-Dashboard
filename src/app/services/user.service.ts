import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = 'http://localhost:3000/user';


  constructor(
    private http: HttpClient
  ) { }

  public requestUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.URL}`);
  }

}
