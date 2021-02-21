import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/dashBoard/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{path:'',
component:LoginComponent
},
{path:'db',
component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
