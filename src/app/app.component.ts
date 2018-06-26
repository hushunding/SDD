import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ParamDataService } from './param-data.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(public paramDS: ParamDataService, private modalService: NzModalService) {

  }

  ngAfterViewInit() {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    const modal = this.modalService.create({
      nzTitle: '创建和打开SDD',
      nzMaskClosable: false,
      nzFooter: [
        {
          label: '取消',
          shape: 'default',
          onClick:  () => { modal.close(); window.opener = null; window.open('', '_self'); window.close(); }
        }]
    });
  }

}
