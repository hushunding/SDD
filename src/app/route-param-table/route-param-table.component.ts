import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-route-param-table',
  templateUrl: './route-param-table.component.html',
  styleUrls: ['./route-param-table.component.css']
})
export class RouteParamTableComponent implements OnInit {
  static Count = 0;
  constructor() {
    RouteParamTableComponent.Count++;
    console.log(RouteParamTableComponent.Count);
   }

  ngOnInit() {
  }

}
