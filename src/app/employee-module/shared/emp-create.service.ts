import { HttpClient } from '@angular/common/http';
import { Employee } from './../employees/employee.model';
import { EmployeDataService } from './../../employe-data.service';
import { Injectable } from '@angular/core';


@Injectable()
export class EmpCreateService {
  url:string="./assets/data.json";
  constructor(private edata:EmployeDataService,private http:HttpClient) { 

  }
saveData(empData:Employee){


}
}
