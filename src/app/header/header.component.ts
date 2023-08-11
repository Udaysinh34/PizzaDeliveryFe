import { Component } from '@angular/core';
import { PizzaAppService } from '../pizza-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public pizzaservice:PizzaAppService,private router:Router) {
   
  }

  logout()
  {
    this.pizzaservice.logout();
    this.router.navigate(['/login']);
  }

}
