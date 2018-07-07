import { DataSharingService } from './../../shared/services/data-sharing.service';
import { Router } from '@angular/router';
import { Employee } from './../employee.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { EmployeDataService } from '../../../employe-data.service';

@Component({
  selector: 'app-employee-single-list',
  templateUrl: './employee-single-list.component.html',
  styleUrls: ['./employee-single-list.component.css']
})
export class EmployeeSingleListComponent implements  OnInit,OnChanges {
@Input() emp:Employee;
@Input() searchString:string;
@Output() buttonemitter:EventEmitter<String>= new EventEmitter<String>();

department=["IT","HR","guard","other"
  ];
  constructor(private route:Router,private _employedataservice:EmployeDataService,private datashare:DataSharingService) { }

  ngOnInit() {
  
  }
ngOnChanges(changes:SimpleChanges){
 
  //console.log(this.emp)
}
routeToListById(__id: number,buttonname:String) {
  this.route.navigate(['list/' + __id],{
    queryParams:{'search':this.searchString}
    
  })
  //this.buttonemitter.emit(buttonname);
  // this.datashare.editemployeeId.next(__id);
  // this.datashare.buttontypeclicked.next(buttonname)
}
routeToEditById(__id: number,buttonname:String) {
 // this.route.navigate(['edit/' + __id])
 
 //this.buttonemitter.emit(buttonname);
 
 this.datashare.editemployeeId.next(__id);
 this.datashare.buttontypeclicked.next(buttonname)
  
}

deleteEmp(id:number){
this._employedataservice.deleteEmployeebyId(id);
}

}
