import { FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.component.html',
  styleUrls: ['./create-employee-form.component.css']
})
export class CreateEmployeeFormComponent implements OnInit {
commingFormGroupData:boolean=false;
formSubmitStatus:boolean;
  constructor(private actroute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  gotoreactform(){
    this.router.navigate(['empdata'],{relativeTo:this.actroute});
  }
  commingFormgroup(event){
    this.commingFormGroupData=event;

  }
  formStatus(event)
  {
this.formSubmitStatus=event;
  }
  
}
