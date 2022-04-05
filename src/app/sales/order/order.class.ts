import { Customer } from "../customer/customer.class";

export class Order {
    id: number = 0; // Properties from SalesWebApiSolution-C35
    description: string = "";
    shipped: boolean = false;
    total: number = 0;
    
    customerId: number = 0; // Forign Key to Customer
    customer!: Customer; // Order instance for a customer
}