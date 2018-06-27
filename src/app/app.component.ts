import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ParamDataService } from './param-data.service';
import { NzModalService } from 'ng-zorro-antd';
import { NeworLoadDataComponent } from './newor-load-data/newor-load-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(public paramDS: ParamDataService, private modalService: NzModalService) {

  }

}
