import { Component, Input, OnInit } from '@angular/core';
import { NormalParamSchemtic, ParamDataSet, CommParamEntry, ParamValue } from '../Param/ParamTmpl';

interface DataSchemtic extends CommParamEntry {
  SeqNo: number;
  ParmName: string;
}

@Component({
  selector: 'normal-param-table',
  templateUrl: './normal-param-table.component.html',
  styleUrls: ['./normal-param-table.component.css']
})
export class NormalParamTableComponent implements OnInit {

  AddTrainConfCTvisible: boolean;
  get ConfCount() {
    return this.paramDataSet.paramSerial.length;
  }
  set ConfCount(c) {
    this.SetColumNumber(c);
  }
  @Input() isMultiConfig = false; // 配置数量是否可变量
  @Input() isMultiSource = false; // 是否是多来源的数据
  @Input() tableSchm: NormalParamSchemtic;  // 输入参数框架
  @Input() paramDataSet: ParamDataSet<ParamValue>; // 参数集
  @Input() serforInput = true;

  Schemtic = new Array<DataSchemtic>(); // 用于显示的表格框架
  ConfRange = new Array<number>();


  // todo 采用独立的编辑缓存，仅在确认验证后更新到数据中

  ngOnInit(): void {
    this.SetColumNumber(this.paramDataSet.paramSerial.length);
    let SeqNo = 0;
    for (const ParmName in this.tableSchm) {
      if (this.tableSchm.hasOwnProperty(ParmName)) {
        const element = this.tableSchm[ParmName];
        this.Schemtic.push(Object.assign({ SeqNo, ParmName }, element));
      }
      SeqNo++;
    }
  }
  // 设置列数目
  SetColumNumber(confCount: number) {
    this.ConfRange = [];
    for (let i = 0; i < confCount; i++) {
      this.ConfRange.push(i);
    }
  }

  // 增加列车配置
  AddTrainConfCount(confName: string) {
    this.AddTrainConfCTvisible = false;
    if (this.paramDataSet.paramSerial.length < 5) {
      const Data = Object.assign({}, this.paramDataSet.paramSerial[this.ConfCount].Data);
      this.ConfCount++;
      this.paramDataSet.paramSerial.push({ Name: `${this.ConfCount}`, Data });
    } else {
      alert('配置数已达到上限，无法再添加');
    }
  }


  DeleteConfig(c) {
    this.paramDataSet.paramSerial = this.paramDataSet.paramSerial.filter((v, i) => i !== c);
  }

}
