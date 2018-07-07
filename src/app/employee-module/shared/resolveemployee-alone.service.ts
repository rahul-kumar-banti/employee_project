import { Employee } from './../employees/employee.model';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmployeDataService } from '../../employe-data.service';

@Injectable()
export class ResolveemployeeAloneService implements Resolve<Employee> {
  employee:Employee;
  id:number;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee>
  {
    this.id=parseInt(route.paramMap.get('id'))
   // console.log(this.id+"i  am  from  resolver")
    return this._employeedataservice.employedetailone(this.id)
  }

  constructor(private _employeedataservice:EmployeDataService) { }

}
