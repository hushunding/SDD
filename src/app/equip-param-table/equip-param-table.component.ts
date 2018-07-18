import { Component, OnInit } from '@angular/core';
import { ParamSetSchematic } from '../Param/ParamSet';
import { ParamDataService } from '../param-data.service';
import { ParamTableComponent } from '../param-table-component';

@Component({
  selector: 'app-equip-param-table',
  templateUrl: './equip-param-table.component.html',
  styleUrls: ['./equip-param-table.component.css']
})
export class EquipParamTableComponent implements OnInit, ParamTableComponent {

  ParamSchemtic = ParamSetSchematic.Equip;
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
