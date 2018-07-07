
import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employees/employee.model';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(value:Employee[],searchString:string ):Employee[] {
    if(!value||!searchString)
    {
      return value;
    }
   return value.filter(e=>
        e.name.toLowerCase().indexOf(searchString.toLowerCase())!==-1)
      //value.name.toLowerCase.indexOf(searchString.toLowerCase)==-1;
    
    

  }

}
