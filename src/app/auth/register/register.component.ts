import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { userDetail } from '../auth-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
signUp:FormGroup;
signUpFormData:userDetail;
  constructor(private _formBuilder:FormBuilder,private _authservice:AuthService,private _router:Router) { }

  ngOnInit() {
    this.signUp=this._formBuilder.group({
      dispName:new FormGroup({
        first_name:new FormControl("",[Validators.required,Validators.minLength(3)]),
        last_name:new FormControl("",[])
      }),
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(6)]],
      confpassword:["",[Validators.required,Validators.minLength(6),this.passwordMatching]],
      userName:["",[Validators.required,Validators.minLength(6)]],
      actStatus:[true,[]],
      userImage:['../../assets/image/default.png',[]]
    })
  }

passwordMatching(control:FormControl):{[key:string]:any|null}{
if(control&&control.parent){
  let confpass=control.value;
 let  password=control.parent.get("password").value;
  if(confpass!==password)
{
  return {passwordNotMatch:"password not match"}
}
}

return null;
}
formSubmit()
{
 // console.log(this.signUp.invalid)
}
SignUpSubmit(){
  let signUpstatus;
  this.signUpFormData=this.signUp.value;
  this.signUpFormData.userId=Math.floor(Math.random()*10000000);
 signUpstatus=this._authservice.signUp(this.signUpFormData)
 if(signUpstatus){
   this._router.navigate(['/login']);
 }
 else{
   alert("fail");
 }
}
}
