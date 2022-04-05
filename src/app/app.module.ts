import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Added
import { HttpClientModule } from '@angular/common/http' // Added

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerListComponent } from './sales/customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './sales/customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './sales/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './sales/customer/customer-edit/customer-edit.component';
import { OrderDetailComponent } from './sales/order/order-detail/order-detail.component';
import { OrderListComponent } from './sales/order/order-list/order-list.component';
import { OrderCreateComponent } from './sales/order/order-create/order-create.component';
import { OrderEditComponent } from './sales/order/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent, MenuComponent, // Added MenuComponent
    HomeComponent,
    AboutComponent,
    E404Component,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderCreateComponent,
    OrderEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, // Added FormsModule, HttpClientModule here in decorator
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
