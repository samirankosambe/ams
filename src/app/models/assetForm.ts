export interface IAssetForm{
    empId:string;
    managerId:string;
    assetName:string;
    requestId:string;
    releaseDate:Date;
    status:string;
}

export class AssetForm{
    empId:string;
    managerId:string;
    assetName:string;
    requestId:string;
    releaseDate:Date;
    status:string;

    constructor(empId:string,managerId:string,assetName:string,requestId:string,releaseDate:Date,status:string){
        this.empId=empId;
        this.managerId=managerId;
        this.assetName=assetName;
        this.requestId=requestId;
        this.releaseDate=releaseDate;
        this.status=status;
    }
}