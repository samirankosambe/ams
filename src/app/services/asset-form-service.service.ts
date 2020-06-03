import { Injectable } from '@angular/core';
import { AssetForm, IAssetForm } from '../models/assetForm';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { UserMaster } from '../models/userMaster';
import { UserMasterServiceService } from './user-master-service.service';
import { EmployeeServiceService } from './employee-service.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetFormServiceService {

  requests: any;
  emp:Employee;
  user:UserMaster;
  empId:string;
  managerId:string;
  releaseDate:Date;
  assetName:string;
  requestId:string;
  status:string;
  form:AssetForm;
  
  
  constructor(private http: HttpClient, private userMaster:UserMasterServiceService, private employee: EmployeeServiceService) {
    this.getAllRequests();
  }

  getAssetForm(): Observable<IAssetForm[]>{
    return this.http
      .get<AssetForm[]>('assets/assetForm.json')
  }
  getAllRequests(){
  this.getAssetForm().subscribe((data) => {
      this.requests = data});
  }

  getAssetByIndex(index:number){
    return this.requests[index];
  }
  addForm(name:string, date: Date, id:string):boolean{
    this.user = this.userMaster.getUserById(id);
    this.empId = this.user.employeeNo;
    this.emp = this.employee.getEmployeeById(this.user.employeeNo);
    this.managerId = this.emp.managerId;
    this.releaseDate = date;
    this.assetName = name;
    this.requestId = this.empId + this.managerId;
    this.status = 'Pending';
    this.form =new AssetForm(this.empId,this.managerId,this.assetName,this.requestId,this.releaseDate,this.status);
    this.requests.push(this.form);
    return true;
  }

  checkStatus(id:string):string{
    const index = this.requests.findIndex(item => item.requestId == id);
    return this.requests[index].status;
  }

  allocate(id:string){
    const index = this.requests.findIndex(item => item.requestId == id);
    this.requests[index].status = "Allocated";
  }

  reject(index:number){
    this.requests[index].status = "Rejected";
    return this.requests;
  }
}
