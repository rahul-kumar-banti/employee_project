import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataSharingService implements OnInit {
 editemployeeId:Subject<number>;
 buttontypeclicked:Subject<String>
 
 idchange:number=1;
  constructor() {
    this.editemployeeId=new Subject<number>();
    this.buttontypeclicked=new Subject<String>();
   }

 ngOnInit() {
      this.editemployeeId.next(1);
      this.buttontypeclicked.next("");
 }

}
