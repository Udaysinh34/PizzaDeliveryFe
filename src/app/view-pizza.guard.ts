import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PizzaAppService } from './pizza-app.service';

@Injectable({
  providedIn: 'root'
})
export class ViewPizzaGuard implements CanActivate {
  constructor(private pizzaservice:PizzaAppService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.pizzaservice.isloggedin)
      {
        return true;
      }
      else
      {
        this.route.navigateByUrl("login");
        return false;
      }
  }
  
}
