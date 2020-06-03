export interface IEmployee{
    empNo:string;
    empName:string;
    job:string;
    managerId:string;
    hireDate:Date;
    deptId:string;
}

export class Employee{
    empNo:string;
    empName:string;
    job:string;
    managerId:string;
    hireDate:Date;
    deptId:string;

    constructor(empNo:string,empName:string,job:string,managerId:string,hireDate:Date,deptId:string){
        this.empNo=empNo;
        this.empName=empName;
        this.job=job;
        this.managerId=managerId;
        this.hireDate=hireDate;
        this.deptId=deptId;
    }
}