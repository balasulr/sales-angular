import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  login: string = "";
  password: string = "";

  constructor(
    private emplsvc: EmployeeService // Injecting service
  ) { }

  submit(): void {
    this.emplsvc.login(this.login, this.password).subscribe({
      next: (res) => {
        console.log("Login successful!");
      },
      error: (err) => {
        console.log("Login unsuccessful!");
      }
    });
  }

  ngOnInit(): void {
  }

}
