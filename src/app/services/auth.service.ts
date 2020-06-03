import { Injectable } from '@angular/core';
import { UserMasterServiceService } from './user-master-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userMaster: UserMasterServiceService){}
  loggedIn = this.userMaster.validUser;
  

  isAuthenticated() {    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    
    return promise;
  }


  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn =  false;
  }
}