import { Injectable } from '@angular/core';
import { Asset, IAsset} from '../models/asset'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetServiceService {

  assets:any;

  constructor(private http: HttpClient) {
    this.getAllAssets();
  }
  getAsset(): Observable<IAsset[]> {
    return this.http
      .get('assets/asset.json') as Observable<IAsset[]>;
  }
  getAllAssets(){
    this.getAsset().subscribe((data) => {
        this.assets = data});
    }

  getAssetById(id:number):IAsset{
    var asset = this.assets.find(item => item.assetId == id);
    return asset;
  }

  getAssetByName(name:string):IAsset{
    var asset = this.assets.find(item => item.assetName == name);
    return asset;
  }


  addAsset(newAsset:Asset){
    this.assets.push(newAsset);
    return this.assets;
  }
}
