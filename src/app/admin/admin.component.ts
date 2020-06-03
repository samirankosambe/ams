import { Component, OnInit } from '@angular/core';
import { AssetFormServiceService } from '../services/asset-form-service.service';
import { AssetForm, IAssetForm } from '../models/assetForm';
import { Asset, IAsset} from '../models/asset'
import { Observable, BehaviorSubject } from 'rxjs';
import { AssetServiceService } from '../services/asset-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AssetAllocationServiceService } from '../services/asset-allocation-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  requests:any;
  assets: any;
  asset:Asset;
  showAsset = false;
  showForm = false;

 

  addForm = new FormGroup({
    assetId: new FormControl(''),
    assetName: new FormControl(''),
    assetDes: new FormControl(''),
    quantity: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private assetForm : AssetFormServiceService, private assetService: AssetServiceService,
    private allocation: AssetAllocationServiceService) {
    this.requests = assetForm.getAssetForm().subscribe((data) => {
      this.requests = data});

    this.assets = assetService.getAsset().subscribe((data) => {
      this.assets = data});
   }

   displayAssets(){
     this.showAsset = true;
   }
 
   addAsset(){
    this.showForm = true;
   }

   approve(i:number){
    this.requests = this.allocation.approve(i);
   }

   reject(i:number){
    this.requests = this.assetForm.reject(i);
   }

   onSubmit(){
    this.asset = new Asset(this.addForm.value.assetId, this.addForm.value.assetName,
      this.addForm.value.assetDes, this.addForm.value.quantity, this.addForm.value.status);
      this.assets.push(this.asset);
   }


  ngOnInit(): void {
  }

}
