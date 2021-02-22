import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ToDosService } from 'src/app/services/toDos/to-dos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() ShowTodos = new EventEmitter()

  todos:any[]=[]

  constructor(private articleService:ToDosService) {
    //this.id=window.localStorage.getItem('id');
   }

  ngOnInit(): void {
    
 
  }

}
