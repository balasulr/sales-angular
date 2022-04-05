import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'customerSearch'
})
export class CustomerSearchPipe implements PipeTransform { // JS

  transform(customers: Customer[], searchCriteria: string = ""): Customer[] { // Had to import Customer[]
    if(searchCriteria === "") { // No reason to iterate though all customers if nothing to search for
      return customers;
    }
    let selectedCustomers: Customer[] = []; // Array
    searchCriteria = searchCriteria.toLowerCase(); // Taking care of not having case
    for(let cust of customers) { // Iterate through customers
      if(
        cust.name.toLowerCase().includes(searchCriteria) // Making cust.name lowercase
        || cust.sales.toString().includes(searchCriteria) // If name or sales includes searchCriteria
        || cust.stateCode.toLowerCase().includes(searchCriteria)
        ) {
        selectedCustomers.push(cust); // Adding customer to end of new collection
      }
    }
    return selectedCustomers;
  }

}
