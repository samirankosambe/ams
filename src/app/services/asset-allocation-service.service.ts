import { Injectable } from '@angular/core';
import {IAssetAllocation, AssetAllocation } from '../models/assetAllocation';
import { HttpClient } from '@angular/common/http';
import { AssetFormServiceService } from './asset-form-service.service';
import { Observable } from 'rxjs';
import { IAssetForm, AssetForm } from '../models/assetForm';
import { AssetServiceService } from './asset-service.service';
import { Asset } from '../models/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetAllocationServiceService {
  
  assetAllocations:any;
  asset: Asset;
  allocation: AssetAllocation;
  allocationDate: Date;
  allocationId: string;
  form:AssetForm;

  constructor(private http: HttpClient, private assetForm: AssetFormServiceService, private assetService: AssetServiceService) {
    this.getAssetAllocation();
  }
  getAssetAllocation() {
    this.http
      .get('assets/assetAllocation.json')
      .subscribe(data => {
        this.assetAllocations = data});
  }

  approve(index:number){
    this.form =this.assetForm.getAssetByIndex(index);
    this.allocationDate = new Date();
    this.asset = this.assetService.getAssetByName(this.form.assetName);
    this.allocationId = this.form.assetName + this.form.empId
    this.allocation = new AssetAllocation(this.allocationId,this.asset.assetId,this.form.empId,this.allocationDate,this.form.releaseDate);
    this.assetAllocations.push(this.allocation);
    this.assetForm.allocate(this.form.requestId);
    return this.assetForm.requests;
  }
}
