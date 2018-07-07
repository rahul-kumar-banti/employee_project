import { userDetail } from './../auth/auth-model';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {
loginStatus:boolean;
userImage:"../../assets/image/default.png";
dispName:{""};
firstName="";
  constructor(private _authservice:AuthService,private router:Router) { }

  ngOnInit() {
    this._authservice.loginStataus.subscribe(data=>{
 this.loginStatus=data.logsataus;
 if(data.userInfo)
 {
   let dat=data.userInfo
   this.userImage=dat['userImage'];
   this.dispName=dat['dispName'];
 this.firstName=this.dispName['first_name'];
 }
 
    })
  }
  logout(){
    this.loginStatus=this._authservice.userLogout().logsataus;
    if(!this.loginStatus){
      this.router.navigate(['/home']);
    }
  }

}
