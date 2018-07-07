
export interface Loginstatus{
    logsataus:boolean,
    token:string,
    userInfo?:object

}
export interface userDetail{
    userId?:number,
    userName:string,
    dispName:{first_name:string,last_name?:string},
    userImage?:string,
    password:string,
    confpassword?:string,
    email:string,
    actStatus:boolean
}