export interface IAssetAllocation{
    allocationId:string;
    assetId:string;
    empNo:string;
    allocationDate:Date;
    releaseDate:Date;
}

export class AssetAllocation{
    allocationId:string;
    assetId:string;
    empNo:string;
    allocationDate:Date;
    releaseDate:Date;

    constructor(allocationId?:string,assetId?:string,empNo?:string,allocationDate?:Date,releaseDate?:Date){
        this.allocationId=allocationId;
        this.assetId=assetId;
        this.empNo=empNo;
        this.allocationDate=allocationDate;
        this.releaseDate=releaseDate;
    }
}