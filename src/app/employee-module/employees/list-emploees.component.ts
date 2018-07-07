
import { Routes, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from './employee.model';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { EmployeDataService } from '../../employe-data.service';
import { DataSharingService } from '../shared/data-sharing-service/data-sharing.service';
@Component({
  selector: 'app-list-emploees',
  templateUrl: './list-emploees.component.html',
  styleUrls: ['./list-emploees.component.css']
})
export class ListEmploeesComponent implements OnInit {
  pname: any;
  modelheading:string;
  employee: Employee[];
  modelviewfor:string="edit";
  empid: string;
  finalEmployee: Employee[];
  datafromchild: string = "";
  herror: String = ""
  private _searchString;
  empshow: boolean = false;
  empdatatosend: Employee;
  countnum: number = 1;
  deleteId:Number=0;
  confermdelete=false;
  department=["IT","HR","guard","other"
  ];
  get searchString(): string {
    return this._searchString;
  }
  set searchString(value: string) {
    this._searchString = value;
    this.finalEmployee = this.filterEmployee(this._searchString);
    if(this.finalEmployee.length==0){
    this.finalEmployee=this.filterUlter(this._searchString);
    }
  }
  
  constructor(private ls: EmployeDataService,
     private route: Router,
      private actRoute: ActivatedRoute,
      private dataService:DataSharingService
    ) {
   this.employee=this.actRoute.snapshot.data["employeedts"];
   
   this.finalEmployee = this.employee,
   this.ls.employedetailone(1);
   this.dispid();

  }
  gotoEmployee(eid: string) {
    this.route.navigate(['listemployee', { "id": eid, "name": "rahul" }]);
    this.empshow = true

  }
  filterEmployee(filterstring: string) {
    return this.employee.filter(e =>
      
      e.name.toLowerCase().indexOf(filterstring.toLowerCase()) !== -1)
  }
  empupdate() {
    this.empdatatosend = this.employee[0];
  }
  ngOnInit() {
   this.dataService.buttontypeclicked.subscribe((buttonname:string)=>{
 this.modelviewfor=buttonname;
this.modelheaderUpdate();
   })
    
  
  }
  
  

  dispid() {
    this.actRoute.queryParamMap.subscribe((prm: ParamMap) => {
      if(prm.has('search')){
        this.searchString=prm.get("search");
      
      }
      
      
      
    }
    )

  }
  deleteEmp(id:number){
    this.deleteId=id;
  }
  nextEmployee() {
    if (this.countnum <= 2) {
      this.empdatatosend = this.employee[this.countnum];
      this.countnum++;
    }
    else {
      this.countnum = 0;
    }

  }

  childToParant(event) {
    this.datafromchild = event.email;
  }

  filterUlter(val:string){

    return this.employee;

  }
modelheaderUpdate(){
  if(this.modelviewfor=='edit'){
    this.modelheading="update";
  }
  else if(this.modelviewfor=='view'){
    this.modelheading="employee Detail";
    
  }
  else{
    this.modelheading="model";
  }
}
}
