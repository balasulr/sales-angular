import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
// Added all below:
  customer!: Customer; // Added Property & the ! says don't make an error since know will have an error
  showVerifyButton: boolean = false;

  constructor(
    private custsvc: CustomerService,
    private route: ActivatedRoute, // Allows to read id number off of the route
    private router: Router
  ) { }
  // Methods
  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyRemove(): void {
    this.showVerifyButton = false;
    this.custsvc.remove(this.customer.id).subscribe({
      next: (res) => { // What to do if sucessful
        console.debug("Customer is deleted"!);
        this.router.navigateByUrl("/customer/list");
      },
      error: (err) => { // What to do if not successful
        console.error(err); // Displays the error
      }
    });
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"]; // id in quotes must match what's in app-routing.module.ts. The + turns from string to number
    this.custsvc.get(id).subscribe({
      next: (res) => { // What to do if sucessful
        console.debug("Customer:", res);
        this.customer = res;
      },
      error: (err) => { // What to do if not successful
        console.error(err); // Displays the error
      }
    });
  }

}
