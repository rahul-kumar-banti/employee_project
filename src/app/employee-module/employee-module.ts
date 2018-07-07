import { NgModule } from '@angular/core';
import { CreatePasswordMatchingDirective } from './shared/shared-module/password-matching-service/create-password-matching.directive';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';
import { CommonModule } from '@angular/common';
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