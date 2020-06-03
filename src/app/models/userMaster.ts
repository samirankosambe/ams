
export interface IUserMaster{
userId:string;
userName:string;
password:string;
userType:string;
employeeNo:string;
}

export class UserMaster{
userId:string;
userName:string;
password:string;
userType:string;
employeeNo:string;

constructor(userId?:string,userName?:string,password?:string,userType?:string,employeeNo?:string){
    this.userId=userId;
    this.userName=userName;
    this.password=password;
    this.userType=userType;
    this.employeeNo=employeeNo;
}
}