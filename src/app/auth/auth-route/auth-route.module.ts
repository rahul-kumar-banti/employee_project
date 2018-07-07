import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from '../sign-in/sign-in.component';
import { RegisterComponent } from '../register/register.component';
import { SharedModuleModule } from '../../app-shared/shared-module.module';
const authRoute:Routes=[
  {path:'login',component:SignInComponent},
  {path:'register',component:RegisterComponent}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(authRoute)
  ],
  exports:[RouterModule],
  declarations: [SignInComponent,RegisterComponent]
})
export class AuthRouteModule { 
  constructor(){

  }

}
