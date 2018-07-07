import { Component, OnInit } from '@angular/core';
import { schematic } from '../Param/ParamSet';
import { ParamDataService } from '../param-data.service';
import { ParamTableComponent } from '../param-table-component';

@Component({
  selector: 'app-equip-param-table',
  templateUrl: './equip-param-table.component.html',
  styleUrls: ['./equip-param-table.component.css']
})
export class EquipParamTableComponent implements OnInit, ParamTableComponent {

  ParamSchemtic = schematic.Equip;
  get ParamDataSet() {
    return this.paramdata.paramSet.Equip;
  }

  get Editing() {
    return this.paramdata.Editing;
  }


  constructor(private paramdata: ParamDataService) { }

  ngOnInit() {
  }
}
