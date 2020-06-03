import { Injectable } from '@angular/core';
import { Department, IDepartment} from '../models/department'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  depatments:any;

  constructor(private http: HttpClient) {
    this.getDepartment();
  }
  getDepartment() {
    this.http
      .get('assets/department.json')
      .subscribe(data => {
        this.depatments = data});
  }

  getDepartmentById(id:string):IDepartment{
    var dept = this.depatments.find(item => item.id === id);
    return dept;
  }
}
