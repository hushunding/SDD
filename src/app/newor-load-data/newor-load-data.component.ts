import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { ParamDataService } from '../param-data.service';
import { ElectronService } from '../electron.service';

@Component({
  selector: 'app-newor-load-data',
  templateUrl: './newor-load-data.component.html',
  styleUrls: ['./newor-load-data.component.css']
})
export class NeworLoadDataComponent implements OnInit, AfterViewInit {


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

  private _NewPrjWD = '';
  public get NewPrjWD() {
    return this._NewPrjWD;
  }
  public set NewPrjWD(value) {
    this.IsPrjWDExist = this.es.fs.existsSync(value);
    if (this.IsPrjWDExist) {
      this.remPrjWD = true;
      localStorage.setItem('prjwd', value);
    } else {
      this.remPrjWD = false;
    }
    this._NewPrjWD = value;
  }
  isSpinning = false;
  IsPrjWDExist = false;
  private _remPrjWD = false;
  public get remPrjWD() {
    return this._remPrjWD;
  }
  public set remPrjWD(value) {
    if (!value) {
      localStorage.removeItem('prjwd');
    }
    this._remPrjWD = value;
  }
  constructor(private modalService: NzModalService, private paramDS: ParamDataService, private es: ElectronService) {
    const hfileListstr = localStorage.getItem('hfileList');
    if (hfileListstr) {
      this.hfileList = JSON.parse(hfileListstr);
    }
  }
  ngAfterViewInit(): void {
    this.NewPrjWD = localStorage.getItem('prjwd');
  }
  NewSDD(way, tplContent: TemplateRef<{}>) {
    this.CurrentWay = way;
    if (this.isLoadFromExcel) {
      alert('功能未实现');
    } else {
      this.isSpinning = false;
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
  OpenSDDPrj() {
    const { dialog } = this.es.remote;
    const sddfile = dialog.showOpenDialog({ title: '选择SDD文件', filters: [{ name: 'SDD', extensions: ['sdd', 'SDD'] }], properties: ['openFile'] });
    console.log(sddfile);
  }
  SelNewPrjWD() {
    const { dialog } = this.es.remote;
    const sddfold = dialog.showOpenDialog({ title: '选择项目目录', properties: ['openDirectory', 'createDirectory'] });
    if (sddfold !== undefined) {
      this.NewPrjWD = sddfold[0];
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
        disabled: () => !this.IsPrjWDExist,
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
