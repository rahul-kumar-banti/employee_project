import { employeeModule } from './employee-module/employee-module';
import { PageAuthenticationGuardService } from './employee-module/shared/page-authentication-service/page-authentication-guard.service';
import { AuthService } from './auth/auth.service';
import { appRouteModule } from './app-route-module';
import { ListpageNavigationGuardService } from './listpage-navigation-guard.service';
import { EmployeDataService } from './employe-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListEmploeesComponent } from './employee-module/employees/list-emploees.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { NavComponentComponent } from './nav-component/nav-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeContectComponent } from './employee-module/employees/employee-contect/employee-contect.component';
import { EmployeeInfoComponent } from './employee-module/employees/employee-info/employee-info.component';
import { CreateEmployeeFormComponent } from './employee-module/create-employee-form/create-employee-form.component';
import { ReacFormComponent } from './employee-module/create-employee-form/reac-form/reac-form.component';
import { CustomValidatorDirective } from './custom-validator.directive';
import { CreateFormGuardService } from "./create-form-guard.service";
import { PageNotFoundComponent } from './employee-module/page-not-found/page-not-found.component';
import { EmployeeSingleListComponent } from './/employee-module/employees/employee-single-list/employee-single-list.component';
import { AccordianContentProjectionComponent } from './employee-module/shared/accordian-content-projection/accordian-content-projection.component';
import { DataSharingService } from './employee-module/shared/data-sharing-service/data-sharing.service';
import { ModelContentProjectionComponent } from './employee-module/shared/model-content-projection/model-content-projection.component';
import { AuthRouteModule } from './auth/auth-route/auth-route.module';
import { EmpHomeComponent } from './employee-module/emp-home/emp-home.component';
import { SharedModuleModule } from './app-shared/shared-module.module';
import { ResolveemployeeAloneService } from './employee-module/shared/shared-module/resolver/resolve-single-employee/resolveemployee-alone.service';
import { ResolveEmployeeGardService } from './employee-module/shared/shared-module/resolver/resolve-employee/resolve-employee-gard.service';
@NgModule({
  declarations: [
    AppComponent,
    ListEmploeesComponent,
    WelcomeComponent,
    NavComponentComponent,
    EmployeeContectComponent,
    EmployeeInfoComponent,
    CreateEmployeeFormComponent,
    ReacFormComponent,
    CustomValidatorDirective,
    PageNotFoundComponent,
    EmployeeSingleListComponent,
    AccordianContentProjectionComponent,
    ModelContentProjectionComponent,
    EmpHomeComponent,
   
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    appRouteModule,
    AuthRouteModule,
    employeeModule
  ],
  providers: [
    EmployeDataService,
    CreateFormGuardService,
    ResolveEmployeeGardService,
    ListpageNavigationGuardService,
    ResolveemployeeAloneService,
    DataSharingService,AuthService,
  PageAuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
