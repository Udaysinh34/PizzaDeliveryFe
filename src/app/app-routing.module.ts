import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewPizzaComponent } from './view-pizza/view-pizza.component';
import { ViewPizzaGuard } from './view-pizza.guard';

const routes: Routes = [
  {
    path: 'viewpizza',
    component:ViewPizzaComponent,
    canActivate:[ ViewPizzaGuard]
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'signup',
    component:SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
