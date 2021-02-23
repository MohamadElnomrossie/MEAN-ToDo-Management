import { Component, OnInit,Input } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToDosService } from 'src/app/services/toDos/to-dos.service';
import {faList, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/users/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faList=faList
  signout=faSignOutAlt
  loading=false
  todos:any=[]
 id:string=''
title:string=''
 body:string=''
 empty:boolean=false
  constructor(private articleService:ToDosService,
    private modalService: NgbModal,
    private router:Router,
    private authService:AuthenticationService) {
    //this.id=window.localStorage.getItem('id');
   }
  ngOnInit(): void {
    this.articleService.getMyTodos().subscribe(
      (result:any)=>{
        this.todos=result!
        console.log(this.todos);
      },
      (error:any)=>{
        if (error.error=="You do not have any todos"){
          this.empty=true 
        }
      }
    )
  }
  openVerticallyCentered(content:any){
    this.modalService.open(content, { centered: true });
  }
  Delete(title:string){
    console.log("object");
  this.todos=this.todos.filter((todo:any)=>todo.title!==title)
  if( this.todos.length<1){
    this.empty=true
  }
  }
  Save(){
    this.loading=true
    if (this.body.trim()!==''|| this.title.trim() !==""){
    this.articleService.createToDo(this.title,this.body).subscribe(
      result=>{
        this.title=''
        this.body=''
        this.loading=false
        this.todos.push(result)
        this.empty=false
      },
      error=>{
        console.log(error);
        this.loading=false
      }
    )
    this.modalService.dismissAll()}
  }
edit({...arg}){

var id=arguments[0][2]
var title=arguments[0][0]
var body =arguments[0][1]
var index=this.todos.indexOf(this.todos.filter((todo:any)=>todo._id===id)[0])
this.todos[index]={...this.todos[index],title,body}
// this.todos[index].body=this.body
}

logout(){
  this.authService.logout()
  this.router.navigate(['/login'])
}
}

