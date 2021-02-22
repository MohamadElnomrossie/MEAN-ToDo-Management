import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponentComponent } from './components/todo-component/todo-component.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodosComponent } from './pages/todos/todos/todos.component';
import { HomeComponent } from './pages/dashBoard/home/home.component';
import { ToDOCardComponent } from './components/to-docard/to-docard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    LoginComponent,
    SignupComponent,
    TodosComponent,
    HomeComponent,
    ToDOCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
