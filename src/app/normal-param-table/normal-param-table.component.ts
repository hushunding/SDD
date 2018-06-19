import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'normal-param-table',
  templateUrl: './normal-param-table.component.html',
  styleUrls: ['./normal-param-table.component.css']
})
export class NormalParamTableComponent implements OnInit {
  @Input() ConfCount = 1; //配置数量，默认值为1
  @Input() isMultiConfig = false; //配置数量是否可变量

  BaseTableHeads: Array<{ Name: string; Width: string }> = [{
    Name: '序号',
    Width: '24px'
  },
  {
    Name: '参数',
    Width: '100px'
  },
  {
    Name: '描述',
    Width: '200px'
  },
  {
    Name: '单位',
    Width: '50px'
  },
  {
    Name: '配置值' + this.isMultiConfig ? "1" : "",
    Width: '50px'
  }
  ]


  ngOnInit(): void {
    this.updateEditCache();
    
  }

  i = 1;
  editCache = {};
  dataSet = [
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0'
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1'
    }
  ];

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
