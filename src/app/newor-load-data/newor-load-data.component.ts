import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { ParamDataService } from '../param-data.service';
import { ElectronService } from '../electron.service';
import * as XLSX from 'xlsx';

interface HFile {
  FileName: string;
  Path: string;
}

@Component({
  selector: 'app-newor-load-data',
  templateUrl: './newor-load-data.component.html',
  styleUrls: ['./newor-load-data.component.css']
})
export class NeworLoadDataComponent implements OnInit, AfterViewInit {


  // 历史文件列表 -打开现有程序
  private _hfileList: Array<HFile> = (() => {
    const hfileListstr = localStorage.getItem('hfileList');
    if (hfileListstr) {
      return JSON.parse(hfileListstr);
    } else {
      return [];
    }
  })();

  public get hfileList(): Array<HFile> {
    return this._hfileList;
  }
  public set hfileList(value: Array<HFile>) {
    this._hfileList = value;
    localStorage.setItem('hfileList', JSON.stringify(value));
  }

  // 新建
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

  sddFileConfuse = false;
  private _NewPrName = 'GA';
  public get NewPrName() {
    return this._NewPrName;
  }
  public set NewPrName(value) {
    this._NewPrName = value;
    this.checkPath();
  }


  private _NewPrjWD = '';
  /**
   * @description 工作目录
  */
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
    this.checkPath();
  }

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

  excelFile;
  needExcelFile = false;
  isSpinning = false;
  constructor(private modalService: NzModalService, private paramDS: ParamDataService, private es: ElectronService) {

  }

  ngAfterViewInit(): void {
    this.NewPrjWD = localStorage.getItem('prjwd');
  }
  private checkPath() {
    if (this.es.fs.existsSync(this.NewPrjWD)) {
      const sddfile = this.es.path.join(this.NewPrjWD, this.NewPrName);
      if (!this.es.fs.existsSync(sddfile)) {
        this.sddFileConfuse = false;
        return true;
      } else {
        this.sddFileConfuse = true;
      }
    }
    return false;
  }
  OpenSDDPrj() {
    const { dialog } = this.es.remote;
    const sddfile = dialog.showOpenDialog({ title: '选择SDD文件', filters: [{ name: 'SDD', extensions: ['sdd', 'SDD'] }], properties: ['openFile'] });
    console.log(sddfile);
  }
  NewSDD(way, tplContent: TemplateRef<{}>) {
    this.CurrentWay = way;
    if (this.isLoadFromExcel) {
      this.needExcelFile = true;
      this.isSpinning = false;
    } else {
      this.needExcelFile = false;
    }
    this.createTplModal(tplContent, way);
  }


  SelNewPrjWD() {
    const { dialog } = this.es.remote;
    const sddfold = dialog.showOpenDialog({ title: '选择项目目录', properties: ['openDirectory', 'createDirectory'] });
    if (sddfold !== undefined) {
      this.NewPrjWD = sddfold[0];
    }
  }
  SelExcel()  {
    const { dialog } = this.es.remote;
    const excel = dialog.showOpenDialog({ title: '选择SDD Excel文件', filters: [{ name: 'Excel', extensions: ['xlsx'] }], properties: ['openFile'] });
    if (excel !== undefined) {
      this.isSpinning = true;
      const wb = XLSX.readFile(excel[0]);
      console.log(wb.SheetNames);
    }
  }
  createTplModal(tplContent: TemplateRef<{}>, title: string): void {

    const modal: NzModalRef<{}> = this.modalService.create({
      nzTitle: title,
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
        disabled: () => !this.IsPrjWDExist || this.sddFileConfuse,
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
}
