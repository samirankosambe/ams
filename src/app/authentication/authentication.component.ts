import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { from } from 'rxjs';
import { UserMasterServiceService } from '../services/user-master-service.service';
import { UserMaster } from '../models/userMaster';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
user:UserMaster;
invalid = false;
validated = false;
  logInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  authenticate():void{
    
    this.validated = this.userMasterService.authenticate(this.logInForm.value.username, this.logInForm.value.password);
    this.user = this.userMasterService.user;
    if(this.validated){
      if(this.user.userType == "manager"){
        this.router.navigate(['user']);
      }
      else if(this.user.userType == "admin"){
        this.router.navigate(['admin']);
      }
    }
    
    else{
      this.invalid=true;
    }
  }

  constructor(private userMasterService : UserMasterServiceService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
  }

}
