import { CreateEmployeeFormComponent } from './employee-module/create-employee-form/create-employee-form.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CreateFormGuardService implements CanDeactivate<CreateEmployeeFormComponent>{
  canDeactivate(component: CreateEmployeeFormComponent): boolean {
    if(component.formSubmitStatus)
    {
      return true;
    }
    else if(component.commingFormGroupData){
      return confirm("dou you want  to  leave");
    }
  
    return true;
  }
 
  constructor() { }

}
