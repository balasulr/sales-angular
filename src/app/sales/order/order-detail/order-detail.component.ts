import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit {
  order!: Order;
  showVerifyButton: boolean = false;

  constructor(
    private ordsvc: OrderService,
    private route: ActivatedRoute, // Allows to read id number off of the route
    private router: Router
  ) { }

  remove(): void { // Methods
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyRemove(): void {
    this.ordsvc.remove(this.order.id).subscribe({
      next: (res) => { // What to do if sucessful
        console.debug("Order deleted"!);
        this.router.navigateByUrl("/order/list");
      },
      error: (err) => { console.error(err); } // What to do if not successful & displays the error
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"]; // id in quotes must match what's in app-routing.module.ts. The + turns from string to number
    this.ordsvc.get(id).subscribe({
      next: (res) => { // What to do if sucessful
        console.debug("Order:", res);
        this.order = res;
      },
      error: (err) => { console.error(err); } // What to do if not successful & displays the error
    });
  }

}
