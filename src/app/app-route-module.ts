import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { EmpHomeComponent } from "./employee-module/emp-home/emp-home.component";

const appRoutes: Routes = [
    {
      path: 'home', component: WelcomeComponent
    },
    // {
    //   path: '/emp', loadChildren:EmpHomeComponent
    // },
    { path: '', redirectTo: "/home", pathMatch: "full" }
  ]
  
  
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class appRouteModule{

}