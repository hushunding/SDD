import { Component, OnInit } from '@angular/core';
import { ParamTableComponent } from '../param-table-component';
import { schematic } from '../Param/ParamSet';
import { ParamDataService } from '../param-data.service';

@Component({
  selector: 'app-project-param-table',
  templateUrl: './project-param-table.component.html',
  styleUrls: ['./project-param-table.component.css']
})
export class ProjectParamTableComponent implements OnInit, ParamTableComponent {
  ParamSchemtic = schematic.Project;
  get ParamDataSet() {
    return this.paramdata.paramSet.Project;
  }

  get Editing() {
    return this.paramdata.Editing;
  }


  constructor(private paramdata: ParamDataService) { }

  ngOnInit() {
  }
}
