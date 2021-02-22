import { Component, OnInit,Input } from '@angular/core';
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
  title:string=''
  body:string=''

  constructor(private articleService:ToDosService
    ,private modalService: NgbModal) {
 
   }

  ngOnInit(): void {
  
    this.getMyTodos()
  }
  getMyTodos(){
    this.articleService.getMyTodos().subscribe(
      (result:any)=>{
        this.todos=result!
      },
      error=>{
        console.log(error);
      }
    )
  }
  edit(){
    console.log("true");
  }
   rem(element:any, _:any) {
    console.log(element);
    element.remove();
}
  delete(){
  document.querySelector('#body')?.parentElement?.parentElement?.remove()
  }
  openVerticallyCentered(content:any){
    this.modalService.open(content, { centered: true });
  }
Save(){}

}
