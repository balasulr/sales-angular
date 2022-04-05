import { Component, OnInit } from '@angular/core';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  // Property
  orders!: Order[];

  constructor(
    private ordsvc: OrderService
  ) { }

  ngOnInit(): void {
    this.ordsvc.list().subscribe({ // subscribe takes care of asychronous call
      next: (res) => { // next and error is equivalent to then & fail method in jQuery
        console.debug("Orders", res);
        this.orders = res;
      },
      error: (err) => { console.error(err); } // data that comes back if error
    });
  }

}