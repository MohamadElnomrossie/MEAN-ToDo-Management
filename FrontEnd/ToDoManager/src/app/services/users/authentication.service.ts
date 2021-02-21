import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
usersUrl='http://localhost:3000/auth/'
userInfo:any
  constructor(private http:HttpClient) { }

login(email:string,password:string) {
  return this.http.post(this.usersUrl+'login',{email,password})
  }
}
