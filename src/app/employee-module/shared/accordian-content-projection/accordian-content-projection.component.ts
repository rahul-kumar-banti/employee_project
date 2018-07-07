import { Component, OnInit, Input } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-accordian-content-projection',
  templateUrl: './accordian-content-projection.component.html',
  styleUrls: ['./accordian-content-projection.component.css']
})
export class AccordianContentProjectionComponent implements OnInit {

  constructor() { }
isHidden:boolean=false;
expSymbol="-";
@Input() headerName:string;
  ngOnInit() {
  
   
  }
  symbolChange(){
  
      if(this.isHidden){
        this.expSymbol="+";
      }
      else{
        this.expSymbol="-";
      }
  }


}
