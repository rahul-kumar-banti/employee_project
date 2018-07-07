import { EmployeDataService } from './../../employe-data.service';
import { Employee } from './../employees/employee.model';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResolveEmployeeGardService implements Resolve<Employee[]>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
 return this._EmpData.employdetail();
  }

  constructor(private _EmpData:EmployeDataService) { 

  }

}
