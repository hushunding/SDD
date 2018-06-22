import { Component, OnInit } from '@angular/core';
import { schematic } from '../data/schematic';
import { TestVhlParam } from '../data/TestData';

@Component({
  selector: 'app-vehile-param-table',
  templateUrl: './vehile-param-table.component.html',
  styleUrls: ['./vehile-param-table.component.css']
})
export class VehileParamTableComponent implements OnInit {

  VhlTableSch = schematic.Vehicle;
  VhlParam = TestVhlParam;
  constructor() { }

  ngOnInit() {
  }

}
