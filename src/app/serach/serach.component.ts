import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PizzaDetails } from '../pizza-details';
import { PizzaAppService } from '../pizza-app.service';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent {

  pizzaWord!:string;

  @Output()
  pizzaWorddata:EventEmitter<string> = new EventEmitter<string>();

  onsearch():void{
    this.pizzaWorddata.emit(this.pizzaWord)
  }

  

}
