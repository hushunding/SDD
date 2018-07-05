import { Component, OnInit } from '@angular/core';
import { ParamDataService } from '../param-data.service';
import { VehicleParam } from '../Param/Vehicle';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {
  AddTrainConfCTvisible = false;


  constructor(private paramDS: ParamDataService) { }

  ngOnInit() {
  }
  // 增加列车配置
  AddTrainConfCount(confName: string) {
    this.AddTrainConfCTvisible = false;
    if (this.paramDS.paramSet.Vehicle.paramSerial.length < 5) {
      const Data = new VehicleParam();
      this.paramDS.paramSet.Vehicle.paramSerial.push({ Name: confName, Data });
    } else {
      alert('配置数已达到上限，无法再添加');
    }
  }
}
