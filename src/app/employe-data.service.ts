import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/do";
import "rxjs/Observable";
import "rxjs/add/observable/of";
import { nextTick } from 'q';
import { Employee } from './employee-module/employees/employee.model';
@Injectable()
export class EmployeDataService {


 employee: Employee[]=[{
   id:1,
    name:"rahul",
    gender:"male",
    email:"rahulbanti36@gmail.com",
    phoneNumber:7545995484,
    contactPrefrence:"phone",
    dateOfBirth:new Date("6/5/1995"),
    daepartment:1,
    inActive:true,
    photoPath:"../../assets/image/r.jpg"

},
{
  id:2,
    name:"vikas",
    gender:"male",
    email:"vikas@gmail.com",
    phoneNumber:465656564464,
    contactPrefrence:"email",
    dateOfBirth:new Date("6/5/1993"),
    daepartment:2,
    inActive:true,
    photoPath:"../../assets/image/s.jpg"

},
{
  id:3,
    name:"faisal",
    gender:"male",
    email:"faisalali@gmail.com",
    phoneNumber:9485566223,
    contactPrefrence:"phone",
    dateOfBirth:new Date("5/23/1996"),
    daepartment:1,
    inActive:true,
    photoPath:"../../assets/image/f.jpg"

},
{
  id:4,
    name:"manisha",
    gender:"female",
    email:"manisha@gmail.com",
    phoneNumber:9696332255,
    contactPrefrence:"phone",
    dateOfBirth:new Date("03/06/1996"),
    daepartment:1,
    inActive:true,
    photoPath:"../../assets/image/mm.jpg"

}
];
  emp: Employee;
  sub: any;
  singleEmployee: Employee;
  // url:string="https://api.myjson.com/bins/c9at2";
  url: string = "./assets/data.json"
  // url:string="http://localhost:3333/getEmployeeData"
  constructor(private http: HttpClient) {
    

  }
  employdetail(): Observable<Employee[]> {
    return  Observable.of(this.employee)//this.http.get(this.url) 
      //.catch(this.errorHandler)
      

  }
  employedetailone(_id: number): Observable<Employee> {
    
    this.employdetail()
    .subscribe(data => {
      this.employee = data;
      if (this.employee) {
        this.emp = this.employee.find(e => e.id === _id);
      }
    })
    
    
    //console.log("i am from service"+_id+" emp "+this.emp.name+"\n data")


    return Observable.of(this.employee.find(e => e.id === _id))



 
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error");

  }
  deleteEmployeebyId(id:number){
    const index=this.employee.findIndex(e=>e.id==id);
    if(index!= -1){
      this.employee.splice(index,1);
    }
  }
  saveEmpdata(emp:Employee){
    this.employee.push(emp);

  }
  updateEmployeeByid(id:number,emp:Employee){
    const index=this.employee.findIndex(e=>e.id==id);
    if(index!= -1){
      this.employee[index]=emp;
    }
  }

}
