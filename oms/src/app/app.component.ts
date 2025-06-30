import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OrderCardComponent } from './Components/order-card/order-card.component';
import { OrderSummaryComponent } from './Components/order-summary/order-summary.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, OrderSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oms';
  orderId:string = "";

  onSearchSubmit(searchText: string){
    this.orderId = searchText;
  }
}
