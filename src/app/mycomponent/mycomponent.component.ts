import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatus:string;
  

  constructor() { }

  ngOnInit(): void {
  }
 

}
