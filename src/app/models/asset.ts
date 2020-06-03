export interface IAsset{
    assetId:string;
    assetName:string;
    assetDes:string;
    quantity:string;
    status:string;
}

export class Asset{
    assetId:string;
    assetName:string;
    assetDes:string;
    quantity:string;
    status:string;

    constructor(assetId?:string,assetName?:string,assetDes?:string,quantity?:string,status?:string){
        this.assetId=assetId;
        this.assetName=assetName;
        this.assetDes=assetDes;
        this.quantity=quantity;
        this.status=status;
    }
}