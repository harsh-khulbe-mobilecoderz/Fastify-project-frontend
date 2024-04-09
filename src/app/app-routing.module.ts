import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StarterComponent } from './starter/starter.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    component:StarterComponent,
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"register",
    component:RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
