import { Component, OnInit } from '@angular/core';
import { ParamDataService } from '../param-data.service';
import { VehicleParam } from '../Param/Vehicle';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {
  AddTrainConfCTvisible = false;
  private _DelTrainConfCTvisible = false;
  ConfList: NzCheckBoxOptionInterface[];

  public get DelTrainConfCTvisible() {
    return this._DelTrainConfCTvisible;
  }
  public set DelTrainConfCTvisible(value) {
    if (value) {
      this.ConfList = this.paramDS.paramSet.Vehicle.paramSerial.map((s) => {
        return { label: s.Name, value: s.Name, checked: false };
      });
    }
    this._DelTrainConfCTvisible = value;
  }

  constructor(public paramDS: ParamDataService, private route: ActivatedRoute,
    private router: Router) {
    this.router.events.subscribe((v) => {
      console.log(v);
    });
  }

  ngOnInit() {
  }
  // 增加列车配置
  AddTrainConfCount(confName: string) {

    const res = this.paramDS.paramSet.AddTrainConfCount(confName);
    if (res) {
      this.AddTrainConfCTvisible = false;
    } else {
      alert('名称重复');
    }

  }
  // 删除列车配置
  DelTrainConf() {
    this._DelTrainConfCTvisible = false;
    for (const c of this.ConfList) {
      if (c.checked) {
        this.paramDS.paramSet.DeleteConfig(c.value);
      }
    }
  }
  // 设置为编辑
  SetEditing() {
    this.paramDS.Editing = true;
  }
  // 提交数据验证，并关闭数据验证
  CheckInput() {
    this.paramDS.Editing = false;
  }
  get CanAddConf() { return this.paramDS.paramSet.Vehicle.paramSerial.length < 5; }
  get CanDelConf() { return this.paramDS.paramSet.Vehicle.paramSerial.length > 1; }

}
