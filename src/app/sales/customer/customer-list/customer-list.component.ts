import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  // Added Property
  customers: Customer[] = [];

  constructor(
    private custsvc: CustomerService // Added
  ) { }

  ngOnInit(): void { // Added code
    this.custsvc.list().subscribe({ // subscribe takes care of asychronous call
      next: (res) => { // next and error is equivalent to then & fail method in jQuery
        this.customers = res;
        console.debug("Customers", res);
      },
      error: (err) => {
        console.error(err); // data that comes back if error
      }
    })
  }

}
