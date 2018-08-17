import { Component, OnInit } from '@angular/core';
import { ParamDataService } from '../param-data.service';
import { ParamSetSchematic } from '../Param/ParamSet';

@Component({
  selector: 'app-com-route-param-table',
  templateUrl: './com-route-param-table.component.html',
  styleUrls: ['./com-route-param-table.component.css']
})
export class ComRouteParamTableComponent implements OnInit {

  ParamSchemtic = ParamSetSchematic.SysRoute;

  get ParamData() {
    return this.paramdata.paramSet.SysRoute.GetData(0);
  }

  get Editing() {
    return this.paramdata.Editing;
  }
  constructor(private paramdata: ParamDataService) { }

  ngOnInit() {
  }

}
