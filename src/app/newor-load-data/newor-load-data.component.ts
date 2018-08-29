import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { ParamDataService } from '../param-data.service';

@Component({
  selector: 'app-newor-load-data',
  templateUrl: './newor-load-data.component.html',
  styleUrls: ['./newor-load-data.component.css']
})
export class NeworLoadDataComponent implements OnInit {

  hfileList: Array<{
    FileName: string;
    Path: string
  }> = [];
  isVisible = false;
  NewSDDways = [{
    type: 'tmpl',
    title: '从模板新建',
    desc: '根据模板创建新的SDD文件',
    icon: 'assets/tmpl.png',
  }, {
    type: 'excel',
    title: '从Excel导入',
    desc: '从旧Excel格式SDD文件升级为APP版本',
    icon: 'assets/excel.png',
  },
  ];
  CurrentWay;
  get isLoadFromExcel() {
    return this.CurrentWay.type === 'excel';
  }
  excelFile;
  NewPrName = 'GA';
  NewPrjWD = '';
  isSpinning = false;
  constructor(private modalService: NzModalService, private paramDS: ParamDataService) {
    const hfileListstr = localStorage.getItem('hfileList');
    if (hfileListstr) {
      this.hfileList = JSON.parse(hfileListstr);
    }
  }

  NewSDD(way, tplContent: TemplateRef<{}>, exfileElem: HTMLInputElement) {
    this.CurrentWay = way;
    if (this.isLoadFromExcel) {
      // alert('功能未实现');
      exfileElem.click();
    } else {
      this.createTplModal(tplContent);
    }
  }
  NewSDDFromExcel(tplContent: TemplateRef<{}>, exfileElem: HTMLInputElement) {
    if (exfileElem.files.length > 0) {
      this.excelFile = exfileElem.files[0];
      this.isSpinning = true;
      this.createTplModal(tplContent);
      exfileElem.value = '';
    } else {
      this.excelFile = '';
    }
  }

  createTplModal(tplContent: TemplateRef<{}>): void {

    const modal: NzModalRef<{}> = this.modalService.create({
      nzTitle: this.CurrentWay.title,
      nzContent: tplContent,
      nzMaskClosable: false,
      nzClosable: false,
      nzFooter: [{
        label: '取消',
        shape: 'default',
        onClick: () => modal.triggerCancel()
      },
      {
        label: '确定',
        type: 'primary',
        disabled: this.isSpinning && this.isLoadFromExcel,
        onClick: () => modal.triggerOk()
      }],
      nzOnOk: () => {
        this.paramDS.Workspace = this.NewPrjWD;
        return this.paramDS.NewDataFromTmpl(this.NewPrName).catch((r) => console.log(r));
      }
    });
  }
  ngOnInit() {
  }
  OpenPrj(file) {
    console.log(file);
    throw new Error('');
  }

}
