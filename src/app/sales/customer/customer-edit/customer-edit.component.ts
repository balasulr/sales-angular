import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.class';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
// Added all code below
  customer!: Customer; // Property of Customer instance

  constructor( // Inject services that need into edit
    private custsvc: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  save(): void { // Method to do save
    this.custsvc.change(this.customer).subscribe({
      next: (res) => {
        console.debug("Customer updated");
        this.router.navigateByUrl("/customer/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"]; // Want to be a number
    this.custsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Customer:", res);
        this.customer = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
