import { Component, OnInit,Input } from '@angular/core';
import { ToDosService } from 'src/app/services/toDos/to-dos.service';

@Component({
  selector: 'app-to-docard',
  templateUrl: './to-docard.component.html',
  styleUrls: ['./to-docard.component.css']
})
export class ToDOCardComponent implements OnInit {
  todos:any[]=[]
  constructor(private articleService:ToDosService) {
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

}
