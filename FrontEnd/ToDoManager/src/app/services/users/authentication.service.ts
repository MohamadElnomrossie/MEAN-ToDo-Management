import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignUP } from 'src/app/interfaces/userInterface';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private usersUrl='http://localhost:3000/auth/'
userInfo:any
  constructor(private http:HttpClient) { }

login(email:string,password:string) {
  return this.userInfo=this.http.post(this.usersUrl+'login',{email,password})
  }
loggedIn():boolean {
        if (window.localStorage.getItem('token')&&window.localStorage.getItem('id')){
          return true
        }
        else{ return false}
        
                    } 
signup(user:ISignUP){
  return this.http.post(this.usersUrl+'signup',user)
}
logout(){
  window.localStorage.clear()
  this.userInfo=undefined
  return true
}
}