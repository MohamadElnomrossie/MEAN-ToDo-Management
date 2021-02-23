import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ToDosService } from 'src/app/services/toDos/to-dos.service';
import {faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-to-docard',
  templateUrl: './to-docard.component.html',
  styleUrls: ['./to-docard.component.css']
})
export class ToDOCardComponent implements OnInit {
  todos:any[]=[]
  faEdit=faEdit
  faTrash=faTrash
  @Input() title:string=''
  @Input() body:string=''
  @Input() id:string=''
  @Output() todoDeleted=new EventEmitter()
  @Output() todoUpdated=new EventEmitter()
loading=false;
  constructor(private articleService:ToDosService
    ,private modalService: NgbModal) {
   }
  ngOnInit(): void {

  }

  edit(){
    this.articleService.update(this.id,this.title,this.body).subscribe(
      result=>{
        this.todoUpdated.emit([this.title,this.body,this.id])
      },
      error=>{
    console.log(error);
      }
    )
    this.modalService.dismissAll()
  }
  deleteTodo(){
  this.loading=true
   this.articleService.deleteToDo(this.id).subscribe(
     result=>{
      console.log("Deleted");
      this.todoDeleted.emit(this.title)
     },
     error=>{
      console.log(error);
     }
   )
  this.loading=false
  }
  openVerticallyCentered(content:any){
    this.modalService.open(content, { centered: true });
  }
Save(){}


}
