import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { AssetFormServiceService } from '../services/asset-form-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  submitted = false;
  invalid = false;
  valid = false;
  id:string;
  status:string;

   
  requestForm =new FormGroup({
    assetName: new FormControl(''),
    releaseDate: new FormControl('')
  })

  statusForm =new FormGroup({
    requestId: new FormControl('')
  })

  addForm(){
    this.submitted = this.assetForm.addForm(this.requestForm.value.assetName, this.requestForm.value.releaseDate, '123457');
    this.id = this.assetForm.form.requestId;
    console.log(this.submitted);
    console.log(this.assetForm.form);
  }

  checkStatus(){
    this.status = this.assetForm.checkStatus(this.statusForm.value.requestId);
    if(this.status){
      this.valid = true;
   }
   else{
     this.invalid = true;
   }
  }

  constructor(private assetForm: AssetFormServiceService) { }

  ngOnInit(): void {
  }

}
