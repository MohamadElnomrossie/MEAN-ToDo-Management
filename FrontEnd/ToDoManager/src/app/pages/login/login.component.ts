import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/users/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loading:boolean=false;
email:string='';
password:string=''
msg:string=''
  constructor(private authService:AuthenticationService,
    private router:Router) { }
  ngOnInit(): void {
  }
  login(){
  this.loading=true
   this.authService.login(this.email,this.password).subscribe(
     (result:any)=>{
       window.localStorage.setItem('token','Bearer '+result.token)
       window.localStorage.setItem('id',result._id)
       this.router.navigate(['/db'])
     },
     error=>{
       console.log(error);
     }
   )
   this.loading=false
   }
  showToast=false
}
