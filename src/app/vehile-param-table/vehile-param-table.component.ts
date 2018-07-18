import { Component, OnInit } from '@angular/core';
import { ParamSetSchematic } from '../Param/ParamSet';
import { ParamDataService } from '../param-data.service';
import { ParamTableComponent } from '../param-table-component';


@Component({
  selector: 'app-vehile-param-table',
  templateUrl: './vehile-param-table.component.html',
  styleUrls: ['./vehile-param-table.component.css']
})
export class VehileParamTableComponent implements OnInit, ParamTableComponent {
  ParamSchemtic = ParamSetSchematic.Vehicle;
  get ParamDataSet() {
    return this.paramdata.paramSet.Vehicle;
  }

  get Editing() {
    return this.paramdata.Editing;
  }


  constructor(private paramdata: ParamDataService) { }

  ngOnInit() {
  }

}
