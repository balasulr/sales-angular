import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer.class';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:36385/api/customers"; // Added

  constructor(
    private http: HttpClient // Added as parameter
  ) { }

  // Added methods - 2 Read Methods
  list(): Observable<Customer[]> { // Added this collection of customer instances
    return this.http.get(`${this.baseUrl}`) as Observable<Customer[]>; // Observable is a class that helps with asynchrous
  }

  get(id: number): Observable<Customer> { // Will bring back at most one customer
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Customer>; // Observable<Customer> is same as line above
  }

  // Post/ Add/ Create Method
  create(customer: Customer): Observable<Customer> {
    return this.http.post(`${this.baseUrl}`, customer) as Observable<Customer>;
  }

  // Put/ Change Method
  change(customer: Customer): Observable<any> { // any denotes will
    return this.http.put(`${this.baseUrl}/${customer.id}`, customer) as Observable<any>;
  }

  // Delete/ Remove Method
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
