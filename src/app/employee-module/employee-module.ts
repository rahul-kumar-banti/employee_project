import { EmpHomeComponent } from './emp-home/emp-home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CreatePasswordMatchingDirective } from './shared/shared-module/password-matching-service/create-password-matching.directive';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '../app-shared/shared-module.module';
import { ListEmploeesComponent } from './employees/list-emploees.component';
import { EmployeeContectComponent } from './employees/employee-contect/employee-contect.component';
import { EmployeeInfoComponent } from './employees/employee-info/employee-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageAuthenticationGuardService } from './shared/page-authentication-service/page-authentication-guard.service';
import { ListpageNavigationGuardService } from '../listpage-navigation-guard.service';
import { CreateEmployeeFormComponent } from './create-employee-form/create-employee-form.component';
import { ReacFormComponent } from './create-employee-form/reac-form/reac-form.component';
import { ResolveEmployeeGardService } from './shared/shared-module/resolver/resolve-employee/resolve-employee-gard.service';
import { ResolveemployeeAloneService } from './shared/shared-module/resolver/resolve-single-employee/resolveemployee-alone.service';
import { CreateFormGuardService } from '../create-form-guard.service';
const emprouter:Routes=[
{path:'emp',component:EmpHomeComponent,
children:[
    {
        path: 'listemployee/:id', component: ListEmploeesComponent,
        children: [{
          path: "contact", component: EmployeeContectComponent
        },
        {
          path: "info", component: EmployeeInfoComponent
        }]
      },
      { path: 'datanotfound', component: PageNotFoundComponent },
      {
        path: 'listemployee',
        canActivate:[PageAuthenticationGuardService],
        component: ListEmploeesComponent,
        resolve: { employeedts: ResolveEmployeeGardService }
      },
      { 
      path: "list/:id", 
      component: EmployeeInfoComponent, 
      canActivate: [ListpageNavigationGuardService,PageAuthenticationGuardService], 
      resolve: { employeeById: ResolveemployeeAloneService } },
      {
        path: "edit/:id",
        component: CreateEmployeeFormComponent,
        canActivate:[PageAuthenticationGuardService], 
        canDeactivate: [CreateFormGuardService],
        children: [{
          path: "empdata", component: ReacFormComponent
        }]
      }

]
}
]
@NgModule({
    declarations:[
        CreatePasswordMatchingDirective,
    ],

    imports:[SharedModuleModule,
    CommonModule,
    RouterModule.forChild(emprouter)
],
exports:[RouterModule]

})
export class employeeModule{

}
//https://github.com/rahulbanti36/employee_project.git