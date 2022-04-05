import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.class';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = "http://localhost:36385/api/orders"; // Added

  constructor(
    private http: HttpClient // Added as parameter
  ) { }

  // Added methods - 2 Read Methods
  list(): Observable<Order[]> { // Added this collection of order instances
    return this.http.get(`${this.baseUrl}`) as Observable<Order[]>; // Observable is a class that helps with asynchrous
  }

  get(id: number): Observable<Order> { // Will bring back at most one order
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Order>; // Observable<Order> is same as line above
  }

  // Post/ Add/ Create Method
  create(order: Order): Observable<Order> {
    return this.http.post(`${this.baseUrl}`, order) as Observable<Order>;
  }

  // Put/ Change Method
  change(order: Order): Observable<any> { // any denotes that any type
    return this.http.put(`${this.baseUrl}/${order.id}`, order) as Observable<any>;
  }

  // Delete/ Remove Method
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
