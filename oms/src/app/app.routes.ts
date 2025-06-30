import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderDetailsComponent } from './Components/order-details/order-details.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"order/detail/:orderId", component:OrderDetailsComponent}
];
