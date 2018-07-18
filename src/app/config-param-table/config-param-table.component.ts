import { Component, OnInit } from '@angular/core';
import { ParamTableComponent } from '../param-table-component';
import { ParamSetSchematic } from '../Param/ParamSet';
import { ParamDataService } from '../param-data.service';

@Component({
  selector: 'app-config-param-table',
  templateUrl: './config-param-table.component.html',
  styleUrls: ['./config-param-table.component.css']
})
export class ConfigParamTableComponent implements OnInit, ParamTableComponent {
  ParamSchemtic = ParamSetSchematic.Config;
  get ParamDataSet() {
    return this.paramdata.paramSet.Config;
  }

  get Editing() {
    return this.paramdata.Editing;
  }


  constructor(private paramdata: ParamDataService) { }

  ngOnInit() {
  }
}
