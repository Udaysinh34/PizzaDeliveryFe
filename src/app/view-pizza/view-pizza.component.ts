import { Component, OnInit } from '@angular/core';

import { PizzaDetails } from '../pizza-details';
import { PizzaAppService } from '../pizza-app.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-pizza',
  templateUrl: './view-pizza.component.html',
  styleUrls: ['./view-pizza.component.css']
})
export class ViewPizzaComponent implements OnInit {

  pizzaD!: PizzaDetails[];

  constructor(private pizzaApp: PizzaAppService, private _snackBar: MatSnackBar) {
  }

  addcart(pizzaId:any) {
    this.pizzaApp.addToCart(pizzaId).subscribe(()=>{
      this._snackBar.open('Order Placed!!!', 'success', {
        duration: 3000,
        panelClass: ['snack','snack2']
      });

    })
  };

  decrease(items:any){
    return items-1;
  }

  increase(items:any){
    return items+1;
  }

  ngOnInit() {
    this.pizzaApp.getPizza().subscribe(data => {
      this.pizzaD = data;
    });
  }
  getSearchText(event: string) {
   
    this.pizzaApp.getPizza().subscribe((x: any) => 
    { 
        this.pizzaD = x.filter((y:any) => y.pizzaName.toLowerCase().startsWith(event.toLowerCase()))
    });
  
}
}
