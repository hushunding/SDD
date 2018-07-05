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

  @Input() isMultiConfig = false; // 配置数量是否可变量
  @Input() isMultiSource = false; // 是否是多来源的数据
  @Input() tableSchm: NormalParamSchemtic;  // 输入参数框架
  @Input() paramDataSet: ParamDataSet<ParamValue>; // 参数集
  @Input() serforInput = true;

  Schemtic = new Array<DataSchemtic>(); // 用于显示的表格框架

  get ConfRange() {
    return new Array(this.ConfCount);
  }


  // todo 采用独立的编辑缓存，仅在确认验证后更新到数据中

  ngOnInit(): void {
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

  DeleteConfig(c) {
    this.paramDataSet.paramSerial = this.paramDataSet.paramSerial.filter((v, i) => i !== c);
  }

}
