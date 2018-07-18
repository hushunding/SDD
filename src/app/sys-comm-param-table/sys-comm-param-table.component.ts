import { Component, OnInit } from '@angular/core';
import { ParamTableComponent } from '../param-table-component';
import { ParamSetSchematic } from '../Param/ParamSet';
import { ParamDataService } from '../param-data.service';

@Component({
  selector: 'app-sys-comm-param-table',
  templateUrl: './sys-comm-param-table.component.html',
  styleUrls: ['./sys-comm-param-table.component.css']
})
export class SysCommParamTableComponent implements OnInit , ParamTableComponent {

  ParamSchemtic = ParamSetSchematic.SysComm;
  get ParamDataSet() {
    return this.paramdata.paramSet.SysComm;
  }

  get Editing() {
    return this.paramdata.Editing;
  }


  constructor(private paramdata: ParamDataService) { }

  ngOnInit() {
  }
}
