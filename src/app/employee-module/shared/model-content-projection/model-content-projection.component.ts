import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model-content-projection',
  templateUrl: './model-content-projection.component.html',
  styleUrls: ['./model-content-projection.component.css']
})
export class ModelContentProjectionComponent implements OnInit {
@Input() modelheading:string;
  constructor() { }

  ngOnInit() {
  }

}