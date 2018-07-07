import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListpageNavigationGuardService } from './listpage-navigation-guard.service';
import { CreateFormGuardService } from './create-form-guard.service';
import { ReacFormComponent } from './employee-module/create-employee-form/reac-form/reac-form.component';
import { CreateEmployeeFormComponent } from './employee-module/create-employee-form/create-employee-form.component';
import { PageAuthenticationGuardService } from './employee-module/shared/service/page-authentication-guard.service';
import { EmployeeInfoComponent } from './employee-module/employees/employee-info/employee-info.component';
import { ListEmploeesComponent } from './employee-module/employees/list-emploees.component';
import { PageNotFoundComponent } from './employee-module/page-not-found/page-not-found.component';
import { EmployeeContectComponent } from './employee-module/employees/employee-contect/employee-contect.component';
import { ResolveEmployeeGardService } from './employee-module/shared/resolve-employee-gard.service';
import { ResolveemployeeAloneService } from './employee-module/shared/resolveemployee-alone.service';
const appRoutes: Routes = [
    {
      path: 'home', component: WelcomeComponent
    },
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
      path: 'listemployee',canActivate:[PageAuthenticationGuardService], component: ListEmploeesComponent, resolve: { employeedts: ResolveEmployeeGardService }
    },
    { path: "list/:id", component: EmployeeInfoComponent, canActivate: [ListpageNavigationGuardService,PageAuthenticationGuardService], resolve: { employeeById: ResolveemployeeAloneService } },
    //{path:"create/:id",component:CreateEmployeeFormComponent},
    {
      path: "edit/:id", component: CreateEmployeeFormComponent,canActivate:[PageAuthenticationGuardService], canDeactivate: [CreateFormGuardService],
      children: [{
        path: "empdata", component: ReacFormComponent
      }]
    },
    { path: '', redirectTo: "/home", pathMatch: "full" }
  ]
  
  
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class appRouteModule{

}