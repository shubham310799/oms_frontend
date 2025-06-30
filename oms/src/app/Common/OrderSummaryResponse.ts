import { orderStatus } from "./OrderStatus";

export interface OrderSummary{
    orderId:number;
    orderStatus: orderStatus;
    orderCreateDt: Date;
}

export interface OrderSummaryResponse{
    orders: OrderSummary[]
}