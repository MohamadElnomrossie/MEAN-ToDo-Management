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
loading=false;
  constructor(private articleService:ToDosService
    ,private modalService: NgbModal) {
   }

  ngOnInit(): void {

  }

  edit(){
    
  }
   rem(element:any, _:any) {
    console.log(element);
    element.remove();
}
  deleteTodo(){
  this.loading=true
   this.articleService.deleteToDo(this.id).subscribe(
     result=>{
      console.log("Deleted");
      
     },
     error=>{
      console.log(error);
     }
   )
  this.loading=false
  document.querySelector('#body')?.parentElement?.parentElement?.parentElement?.remove()
  
  }
  openVerticallyCentered(content:any){
    this.modalService.open(content, { centered: true });
  }
Save(){}


}
