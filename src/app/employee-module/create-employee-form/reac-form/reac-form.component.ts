import { Employee } from './../../employees/employee.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { EmployeDataService } from '../../../employe-data.service';
import { DataSharingService } from '../../shared/data-sharing-service/data-sharing.service';


@Component({
  selector: 'app-reac-form',
  templateUrl: './reac-form.component.html',
  styleUrls: ['./reac-form.component.css']
})
export class ReacFormComponent implements OnInit{
  formheading = "create";
  day: number;
  month: number;
  year: number;
  createEmployee: FormGroup;
  SubmitOk: boolean = false;
  exterror: boolean = false;
  imageShow: boolean = false;
  employee: Employee
  _id: number;
  date: Date;
  imgPath: string = "";
  @Output() formDataEmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() formsubmit: EventEmitter<boolean> = new EventEmitter<boolean>();
  department = [
    { id: 1, name: "IT" },
    { id: 2, name: "HR" },
    { id: 3, name: "guard" },
    { id: 4, name: "other" }
  ];
//constructor  function
  constructor(private _formBuilder: FormBuilder,
    private _actroute: ActivatedRoute,
    private _empdataservice: EmployeDataService,
    private _route: Router, private datashareing: DataSharingService
  )
   {
  this.idUpdateFromParam();
  this.updateIdFromData(); 
  
  }

  ngOnInit() {
    this.formInitialCheck();
    this.formCreation();
    this.updateFormData();

  }
  //form data  change  emmit
  formdatachange() {
    this.formDataEmit.emit(this.createEmployee.dirty);
  }
 //form submit process
  employeeFormSubmit() {
    if (this.createEmployee.invalid) {
      this.SubmitOk = false;
      this.exterror = true;
    }
    else {
      this.SubmitOk = true;
      this.exterror = false;
      this.formsubmit.emit(true);
      if (this.createEmployee.value.id == null) {
        this._empdataservice.saveEmpdata(this.createEmployee.value);
      }
      else {
        this._empdataservice.updateEmployeeByid(this.createEmployee.value.id, this.createEmployee.value)
      }

      this._route.navigate(['emp/listemployee'])
    }
  }
  //change  view  image change  on    form photot path  change
  changeImage() {
    this.imageShow = !this.imageShow;
    this.imgPath = this.createEmployee.controls.photoPath.value;
  }
  //image  initialization  on  form
  printemp(e: Employee) {
    this.employee = e;
    this.imgPath = this.employee.photoPath;
  }
  //update id  
  updateForm(id?: number) {
    if (id) {
      this._id = id;
    }
    this.formheading = "update"
    this.imageShow = true;
    this._empdataservice.employedetailone(this._id).subscribe(data => {
      this.employee = data;
      if (this.employee) {
        this.printemp(this.employee);
        this.updateFormData();
      }

    });
  }
//form data  update  on  id  found
  updateFormData() {
    if (this.employee) {
      this.SubmitOk = false;
      this.createEmployee.controls.id.setValue(this.employee.id)
      this.createEmployee.controls.name.setValue(this.employee.name)
      this.createEmployee.controls.gender.setValue(this.employee.gender);
      this.createEmployee.controls.email.setValue(this.employee.email)
      this.createEmployee.controls.phoneNumber.setValue(this.employee.phoneNumber)
      this.createEmployee.controls.contactPrefrence.setValue(this.employee.contactPrefrence);
      this.date = new Date(this.employee.dateOfBirth);
      this.year = this.date.getFullYear(); this.month = this.date.getMonth(), this.day = this.date.getDay();
      this.createEmployee.controls.dateOfBirth.setValue(this.month + "/" + this.day + "/" + this.year)
      this.createEmployee.controls.daepartment.setValue(this.employee.daepartment)
      this.createEmployee.controls.photoPath.setValue(this.employee.photoPath)
      this.createEmployee.controls.inActive.setValue(this.employee.inActive)
    }
  }
//if  form  data  not  found  then  intialize
  formInitialCheck() {

    if (this._id == 0 || this._id == NaN) {

      this.employee = {
        id: null,
        name: "",
        gender: "male",
        email: "",
        phoneNumber: null,
        contactPrefrence: null,
        dateOfBirth: new Date("05/05/1998"),
        daepartment: 0,
        inActive: true,
        photoPath: "../../assets/image/default.png"

      };
      this.formheading = "create";

    }

    else {
      this.updateForm()

    }
  }
  //form  creation  process
  formCreation() {
    this.createEmployee = this._formBuilder.group({
      id: ["4"],
      name: ["", [Validators.minLength(5), Validators.required, Validators.pattern(/[a-zA-z]/)]],
      gender: ["male", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      phoneNumber: ["+91", [Validators.required, Validators.min(1000000000), Validators.max(999999999999)]],
      contactPrefrence: [],
      dateOfBirth: ["", [Validators.required]],
      daepartment: ["0", [Validators.required]],
      photoPath: [""],
      inActive: ['true']
    });
  }
  //id  update  from parameter
  idUpdateFromParam(){
    this._actroute.paramMap.subscribe((p: ParamMap) => {
      this._id = +p.get("id");
    });
  }
  //id update  from  observable
  updateIdFromData()
  {
    this.datashareing.editemployeeId.subscribe((data: number) => {
      this._id = data;
      this.updateForm(data);
    })

  }
}
