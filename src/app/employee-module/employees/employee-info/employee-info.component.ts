import { Employee } from './../employee.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { EmployeDataService } from '../../../employe-data.service';
import { DataSharingService } from '../../shared/data-sharing-service/data-sharing.service';


@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  emp: Employee;
  department=["IT","HR","guard","other"
  ];
  footerShow:boolean=true;
  // @Input() emp: Employee;
  employee: Employee[];
  private _id: number;
  defaultPhotoPath:string="../../assets/default.png";
  @Input() empFotterStatus:string;
  @Output() notifyee: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor(private _empdataservice: EmployeDataService,
     private _route: ActivatedRoute, 
     private _router: Router,private dataShareing:DataSharingService) { }

  ngOnInit() {
    this.dataShareing.editemployeeId.subscribe((id:number)=>{
      this.updateEmpData(id);
    })
    this._route.paramMap.subscribe((p: ParamMap) => {
      this._id = parseInt(p.get("id"));
      this.updateEmployeeData(this._id);
       })
    // this.emp=this._empdataservice.employedetailone(this._id);
    //console.log(this._id);
  if(this.empFotterStatus=='hide'){
    this.footerShow=false;
  }
  else{
    this.footerShow=true;
  
  }
  

  }
  updateEmployeeData(id:number){
     this.emp=this._route.snapshot.data['employeeById'];
  }
  
  routeToNext() {
    if (this._id <= 3) {
      this._id++;
    }
    else {
      this._id = 1;

    }
    this._router.navigate(['list/' + this._id],{
      queryParamsHandling:"preserve"
    });
  }
  updateEmpData(id:number){
    this._empdataservice.employedetailone(id).subscribe((employee:Employee)=>{
      this.emp=employee;
    });
  }

}
