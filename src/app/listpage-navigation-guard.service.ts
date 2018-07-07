import { EmployeDataService } from './employe-data.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from './employee-module/employees/employee.model';

@Injectable()
export class ListpageNavigationGuardService implements CanActivate {
  empavilable: Employee;
  emp: Employee;
  _id:any;
  employeedata: Employee[];

  constructor(private _actroute: ActivatedRoute, private _empdata: EmployeDataService, private _router: Router) {
   
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this._empdata.employedetailone(+route.params.id).subscribe(data=>this.empavilable=data);
  

  if(this.empavilable) {
    //console.log("running")
    return true;
  }
  else{
  
  this._router.navigate(['datanotfound']);
  return false;
}
   
}

}
