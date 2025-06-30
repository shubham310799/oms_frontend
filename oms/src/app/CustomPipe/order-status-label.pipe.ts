import { Pipe, PipeTransform } from '@angular/core';
import { orderStatus } from '../Common/OrderStatus';

@Pipe({
  name: 'orderStatusLabel'
})
export class OrderStatusLabelPipe implements PipeTransform {

  transform(status: number): string {
    return orderStatus[status];
  }

}
