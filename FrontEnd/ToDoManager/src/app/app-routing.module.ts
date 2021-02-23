import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { GuestGuard } from './guards/guest.guard';
import { HomeComponent } from './pages/dashBoard/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
{path:'',
component:LoginComponent,
},
{path:"login",
component:LoginComponent,
canActivate:[GuestGuard]},
{
  path:'signup',
  component:SignupComponent,
  canActivate:[GuestGuard]
},

{path:'all',
component:HomeComponent,
canActivate:[AuthenticationGuard]},
{path:"**",
component:HomeComponent,
canActivate:[AuthenticationGuard]}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
