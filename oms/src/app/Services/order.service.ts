import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderSummary, OrderSummaryResponse } from '../Common/OrderSummaryResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private client:HttpClient) 
  { 

  }

  GetAllOrder():Observable<OrderSummaryResponse>{
    return this.client.get<OrderSummaryResponse>("https://localhost:44381/"+"order/store/"+"3562");
  }

  GetOrderSummaryById(orderId: string):Observable<OrderSummary>{
    return this.client.get<OrderSummary>("https://localhost:44381/order/summary/"+orderId);
  }
}
