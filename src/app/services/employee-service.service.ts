import { Injectable } from '@angular/core';
import { Employee, IEmployee} from '../models/employee'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employees:any;

  constructor(private http: HttpClient) {
    this.getEmployee();
  }
  getEmployee() {
    this.http
      .get('assets/employee.json')
      .subscribe(data => {
        this.employees = data});
  }

  getEmployeeById(id:string):IEmployee{
    var employee = this.employees.find(item => item.empNo === id);
    return employee;
  }
}
