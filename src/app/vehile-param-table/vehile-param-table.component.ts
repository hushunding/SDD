import { Component, OnInit } from '@angular/core';
import { schematic } from '../Param/ParamSet';
import { ParamDataService } from '../param-data.service';


@Component({
  selector: 'app-vehile-param-table',
  templateUrl: './vehile-param-table.component.html',
  styleUrls: ['./vehile-param-table.component.css']
})
export class VehileParamTableComponent implements OnInit {

  VhlTableSch = schematic.Vehicle;

  constructor(public paramdata: ParamDataService) { }

  ngOnInit() {
  }

}
