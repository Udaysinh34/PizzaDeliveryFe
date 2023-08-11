import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaDetails } from './pizza-details';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PizzaAppService {

  loginurl:string = "http://localhost:8086/login"
  signupurl:string = "http://localhost:8081/register"
  getpizzaurl:string = "http://localhost:8081/getPizza"
  savepizzaurl:string = "http://localhost:8081/save"
  addtocarturl:string = "http://localhost:8081/add-to-cart/"
  currentemail:string = ""

  public isloggedin:boolean=false;

  constructor(private http: HttpClient) { }

  public getPizza(): Observable<PizzaDetails[]> {
    return this.http.get<PizzaDetails[]>(this.getpizzaurl);
  }

  public addToCart(pizzaId:number){
    let newurl:string = this.addtocarturl+this.currentemail;
    return this.http.post<User>(newurl+"/"+pizzaId,pizzaId);
  }

  public signUp(user: User) {
    return this.http.post<User>(this.signupurl, user);
  }

  public login(user: User) {
    return this.http.post<User>(this.loginurl, user);
  }

  public logout(){
    this.currentemail = "";
    this.isloggedin=false
  }

  public savePizza(pizzaD: PizzaDetails) {
    return this.http.post<PizzaDetails>(this.savepizzaurl, pizzaD);
  }

}
