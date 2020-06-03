import { Injectable } from '@angular/core';
import { IUserMaster, UserMaster } from '../models/userMaster';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMasterServiceService {

  constructor(private http: HttpClient) {
    this.getUserMaster();
  }

  users: any;
  validUser:boolean;
  user:UserMaster;

  getUserMaster() {
    this.http
      .get('assets/userMaster.json')
      .subscribe((data) => {
        this.users = data});
  }

  getUserById(id:string):IUserMaster{
    this.user = this.users.find(item => item.userId === id);
    return this.user;
  }

authenticate(name:string, pass:string): boolean{
   this.user = this.users.find(item => item.userName==name && item.password==pass);
  return this.validUser = this.user ? true : false;
}

}
