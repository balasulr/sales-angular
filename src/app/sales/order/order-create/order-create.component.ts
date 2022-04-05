import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../customer/customer.class';
import { CustomerService } from '../../customer/customer.service';
import { Order } from '../order.class';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  // Properties
  order: Order = new Order(); // Give a new instance of Order
  customers!: Customer[]; // Collection of customers

  constructor( // Injecting services as a parameter
    private ordsvc: OrderService,
    private custsvc: CustomerService, // Have here so that can read customers
    private router: Router // Can route away once done
  ) { }

  save(): void {
    this.order.customerId = +this.order.customerId;
    this.ordsvc.create(this.order).subscribe({
      next: (res) => {
        console.debug("Order added");
        this.router.navigateByUrl("/order/list");
      },
      error: (err) => { console.error(err); }
    });
  }
  
    ngOnInit(): void {
        this.custsvc.list().subscribe({
          next: (res) => {
            console.debug("Customers:", res);
            this.customers = res;
          }
        });
    }

}

//// What had that didn't work:

// import { Router } from '@angular/router';
// import { Customer } from '../../customer/customer.class';
// import { CustomerService } from '../../customer/customer.service';
// import { Order } from '../order.class';
// import { OrderService } from '../order.service';

// @Component({
//   selector: 'app-order-create',
//   templateUrl: './order-create.component.html',
//   styleUrls: ['./order-create.component.css']
// })
// export class OrderCreateComponent implements OnInit {
//   // Property
//   order: Order = new Order(); // Give a new instance of Order
//   customers!: Customer[]; // Collection of customers

//   constructor( // Injecting services as a parameter
//     private ordsvc: OrderService,
//     private custsvc: CustomerService, // so that can read customers
//     private router: Router // Can route away once done
//   ) { }

//   save(): void {
//     this.order.customerId = +this.order.customerId; // Makes sure that the string is a number
//     this.ordsvc.create(this.order).subscribe ({
//       next: (res) => {
//         console.debug("Order added");
//         this.router.navigateByUrl("/order/list");
//       },
//       error: (err) => { console.error(err); }
//     });
//   }

//   ngOnInit(): void {
//     this.custsvc.list().subscribe ({
//       next: (res) => {
//         console.debug("Customers:", res);
//         this.customers = res;
//       }
//   }

// // }