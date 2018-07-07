import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Loginstatus, userDetail } from './auth-model';

@Injectable()
export class AuthService {
  token: any = "";
  loginStataus: Subject<Loginstatus>;
  currentLoginStatus: Loginstatus = { logsataus: false, token: "",userInfo:[""] };
  logdInOrNot:boolean=false;
  user:userDetail[] = [{
    userId:1,
    userName:"rahulbanti",
    dispName:{first_name:"rahul",last_name:"banti"},
    userImage:"../../assets/image/r.jpg",
    password:"abcd1234",
    email:"rahulbanti36@gmail.com",
    actStatus:true
   },
   {
    userId:2,
    userName:"vikas",
    dispName:{first_name:"vikas",last_name:"bibhav"},
    userImage:"../../assets/image/default.png",
    password:"123456",
    email:"vikas@gmail.com",
    actStatus:true
   }
  ];
  constructor() {
    this.loginStataus = new Subject<Loginstatus>();
    this.loginStataus.next(this.currentLoginStatus);
  }
  userLogin(email: string, password: string):Loginstatus {
    let found = this.user.filter(user => {
      return user.email == email && user.password == password;
    });
    if (found.length > 0) {
      this.token = Math.floor(Math.random() * 100000000);
      this.logdInOrNot=true;
      this.currentLoginStatus = { logsataus: true, token: this.token ,userInfo:found[0]};
      this.loginStataus.next(this.currentLoginStatus);
      return this.currentLoginStatus;
    }
    else {
      this.token = ""
      this.currentLoginStatus = { logsataus: false, token: this.token }


    }

    return this.currentLoginStatus;

  }
  userLoginState():boolean{
return this.logdInOrNot;
  }
  userLogout():Loginstatus{
    this.logdInOrNot=false;
    this.currentLoginStatus={ logsataus: false, token: this.token };
    this.loginStataus.next(this.currentLoginStatus);
   return this.currentLoginStatus;
  }
  signUp(userData:userDetail):boolean{
    if(this.user.push(userData))
    {
      console.log(this.user);
      return true;
    }
    return false;
  }
}
