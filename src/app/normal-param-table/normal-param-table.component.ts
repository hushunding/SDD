import { Component, Input, OnInit } from '@angular/core';
import { INormalParamEntry, NormalParamTableSchemtic, ParamDataSet } from "../data/TableSchemtic";

interface DataSchemtic extends INormalParamEntry {
  SeqNo: number;
  ParmName: string;
}

@Component({
  selector: 'normal-param-table',
  templateUrl: './normal-param-table.component.html',
  styleUrls: ['./normal-param-table.component.css']
})
export class NormalParamTableComponent implements OnInit {
  private _confCount = 1;//配置数量，默认值为1
  @Input()
  get ConfCount() {
    return this._confCount;
  };
  set ConfCount(c) {
    this.SetColumNumber(c);
    this._confCount = c;
  }
  @Input() isMultiConfig = false; //配置数量是否可变量
  @Input() tableSchm: NormalParamTableSchemtic;  //输入参数框架
  @Input() paramDataSet:ParamDataSet; // 参数集

  Schemtic = new Array<DataSchemtic>(); //实际参数框架
  ConfRange = new Array<number>();

  ConfHeads: Array<{ Name: string; Width: string }>;

  ngOnInit(): void {
    this.SetColumNumber(this._confCount);
    let SeqNo = 0;
    for (const ParmName in this.tableSchm) {
      if (this.tableSchm.hasOwnProperty(ParmName)) {
        const element = this.tableSchm[ParmName];
        this.Schemtic.push(Object.assign({ SeqNo, ParmName }, element));
      }
      SeqNo++;
    }
  }
  SetColumNumber(confCount: number) {
    this.ConfRange = [];
    for (let i = 0; i < confCount; i++) {
      this.ConfRange.push(i);
    }
    
  }
  AddTrainConfCount()
  {
    if(this._confCount < 5)
    {
      
      const Data = Object.assign({}, this.paramDataSet.paramSerial[this.ConfCount].Data)
      this.ConfCount++;
      this.paramDataSet.paramSerial.push({Name:`${this.ConfCount}`, Data}); 
    }
    else
    {
      alert("配置数已达到上限，无法再添加");
    }
  }

  i = 1;
  editCache = {};
  dataSet = [];

  addRow(): void {
    this.i++;
    this.dataSet = [...this.dataSet, {
      key: `${this.i}`,
      name: `Edward King ${this.i}`,
      age: '32',
      address: `London, Park Lane no. ${this.i}`
    }];
    this.updateEditCache();
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
  }

  startEdit(key: string): void {
    this.editCache[key].edit = true;
  }

  finishEdit(key: string): void {
    this.editCache[key].edit = false;
    this.dataSet.find(item => item.key === key).name = this.editCache[key].name;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[item.key]) {
        this.editCache[item.key] = {
          edit: false,
          name: item.name
        };
      }
    });
  }


}
