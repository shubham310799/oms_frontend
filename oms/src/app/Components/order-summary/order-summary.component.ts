import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OrderService } from '../../Services/order.service';
import { OrderSummaryResponse } from '../../Common/OrderSummaryResponse';
import { NgFor } from '@angular/common';
import { orderStatus } from '../../Common/OrderStatus';
import { OrderStatusLabelPipe } from '../../CustomPipe/order-status-label.pipe';

@Component({
  selector: 'app-order-summary',
  imports: [NgFor, OrderStatusLabelPipe],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit, OnChanges{
  @Input()
  orderId: string = "";
  orderSummary: OrderSummaryResponse = {orders : []};
  constructor(private orderService: OrderService){
    console.log("constructor");
  }
  
  ngOnChanges(): void {
    console.log("On change order Summary");
    this.orderSummary.orders = [{
      orderId: 123,
      orderStatus: orderStatus.Active,
      orderCreateDt: new Date()
    }]
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.orderService.GetAllOrder().subscribe({
      next: (data) =>{
        console.log(data);
        this.orderSummary = data;
      },
      error: (err)=>{
        console.log(err);
      }
    });
    console.log(this.orderSummary);
  }

}
