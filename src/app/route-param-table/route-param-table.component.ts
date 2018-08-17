import { Component, OnInit, Input } from '@angular/core';
import { SysRouteParamSchemtic, SysRouteParam } from '../Param/SysRoute';
import { ParamDataService } from '../param-data.service';
import { CommParamEntry, DataSchemtic } from '../Param/ParamTmpl';

@Component({
  selector: 'app-route-param-table',
  templateUrl: './route-param-table.component.html',
  styleUrls: ['./route-param-table.component.css']
})
export class RouteParamTableComponent implements OnInit {
  @Input() tableData: SysRouteParam[];
  @Input() tableSchm: SysRouteParamSchemtic;
  @Input() isComm = true;
  @Input() Editing = true;
  theads = new Array<DataSchemtic>(); // 用于显示的表格框架
  constructor(private paramDS: ParamDataService) {
  }

  ngOnInit() {
    let SeqNo = 0;
    for (const ParmName in this.tableSchm) {
      if (this.tableSchm.hasOwnProperty(ParmName)) {
        const element = this.tableSchm[ParmName];
        this.theads.push(Object.assign({ SeqNo, ParmName }, element));
      }
      SeqNo++;
    }
  }
  AddRoute() {
    this.paramDS.paramSet.AddNewRoute();
  }
  deleteRoute(i) {
    this.paramDS.paramSet.DelRoute(i);
  }
}
