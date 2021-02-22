import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUP } from 'src/app/interfaces/userInterface';
import { AuthenticationService } from 'src/app/services/users/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 fname:string=''
 lname:string=''
 email:string=''
 phone:string=''
 password:string=''
 user:any={}
 loading:boolean=false
//==========================================================================================

  constructor(private authService:AuthenticationService,
   private router:Router) { }

  ngOnInit(): void {
  }
  signUp(){
      this.user={
        fname:this.fname,
        lname:this.lname,
        email:this.email,
        password:this.password,
        phone:this.phone
      }
   this.loading=false
      this.authService.signup(this.user).subscribe(
        result=>{
          this.authService.login(this.user.email,this.user.password).subscribe(
            result=>{
              this.router.navigate(['/db'])
            }
          )         
        },
          error=>{
            console.log(error);
        }
            )
      this.loading=true
            
  }
}


// fname:string;
// lname:string;
// email:string;
// password:string;
// phone:string;
