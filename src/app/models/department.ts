export interface IDepartment{
    deptId:string;
    deptName:string;
}

export class Department{
    deptId:string;
    deptName:string;

    constructor(deptId?:string,deptName?:string){
        this.deptId=deptId;
        this.deptName=deptName;
    }
}