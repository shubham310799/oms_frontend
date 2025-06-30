import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { OrderSummaryComponent } from '../order-summary/order-summary.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, OrderSummaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  orderId:string = "";

  onSearchSubmit(searchText: string){
    this.orderId = searchText;
  }
}
