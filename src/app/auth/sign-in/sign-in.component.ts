import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Loginstatus } from '../auth-model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
passwordhide:boolean=true;
passwordInputType="password"
formAttempted:boolean=false;
comesFrom:string="/home";
optionalUrlArray:string;
login:FormGroup;
lstatus:Loginstatus;
  constructor(private  _authService:AuthService,private _router:Router,private actRoute:ActivatedRoute) {
    this.lstatus=this._authService.currentLoginStatus;

    
   }

  ngOnInit() {
    this.login=new FormGroup({
      'email':new FormControl("",[Validators.required,Validators.email]),
      'password':new FormControl("",[Validators.required,Validators.minLength(6)])
    })
    this.actRoute.queryParamMap.subscribe(data=>{
  this.optionalUrlArray=data.get("lastUrl");
  if(this.optionalUrlArray){
  this.optionalUrlArray=this.optionalUrlArray.split('?')[0].toString();
  this.comesFrom=this.optionalUrlArray.replace(',','/')
  //console.log(this.comesFrom)
  }
    }) 
    
  }
  changePassworFieldType(){
if(this.passwordhide){
  this.passwordInputType="password";
}
else{
  this.passwordInputType="text";
}
  }
  loginSubmit(){
    let email=this.login.get("email").value;
    let password=this.login.get("password").value;
    this.lstatus= this._authService.userLogin(email,password);
    this.formAttempted=true;
    if(this.lstatus.logsataus){
     this._router.navigate([this.comesFrom]);
   }
    
  
    
  }
}
