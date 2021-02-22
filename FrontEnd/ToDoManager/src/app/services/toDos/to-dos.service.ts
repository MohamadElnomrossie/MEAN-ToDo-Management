import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ToDosService {
URL='http://localhost:3000/todos/'
  constructor(private http:HttpClient) { }
  getMyTodos(){
    return this.http.get(this.URL+'all',{headers:{
      authorization:window.localStorage.getItem('token')!
    }})
  }
createToDo(title:string,body:string){
return this.http.post(this.URL+'add',{title,body},{headers:{
  authorization:window.localStorage.getItem('token')!}})
}
deleteToDo(){

}
update(){

}
  }


