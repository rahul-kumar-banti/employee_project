import { NgModule } from '@angular/core';
import { CreatePasswordMatchingDirective } from './shared/shared-module/password-matching-service/create-password-matching.directive';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../app-shared/shared-module.module';
@NgModule({
    declarations:[
        CreatePasswordMatchingDirective,
    ],

    imports:[SharedModuleModule,
    CommonModule,
]

})
export class employeeModule{

}
//https://github.com/rahulbanti36/employee_project.git