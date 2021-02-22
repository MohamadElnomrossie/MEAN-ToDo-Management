import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToDosService } from 'src/app/services/toDos/to-dos.service';
import {faList} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faList=faList
  title:string=''
  body:string=''
  loading=false
  @Output() ShowTodos = new EventEmitter()

  todos:any[]=[]

  constructor(private articleService:ToDosService,
    private modalService: NgbModal) {
    //this.id=window.localStorage.getItem('id');
   }

  ngOnInit(): void {
    
    this.articleService.getMyTodos().subscribe(
      (result:any)=>{
        this.todos=result!
      },
      error=>{
        console.log(error);
      }
    )
  }
  openVerticallyCentered(content:any){
    this.modalService.open(content, { centered: true });
  }
  Save(){
    this.loading=true
    if (this.body.trim()!==''|| this.title.trim() !==""){
    console.log("dssssssssss");
    this.articleService.createToDo(this.title,this.body).subscribe(
      result=>{
        this.title=''
        this.body=''
        this.loading=false
      },
      error=>{
        console.log(error);
        this.loading=false
      }
    )
    this.modalService.dismissAll()}
  }

  edit(){
    
  }

}
