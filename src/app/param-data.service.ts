import { Injectable } from '@angular/core';
import { ParamSet } from './Param/ParamSet';

@Injectable({
  providedIn: 'root'
})
export class ParamDataService {

  paramSet: ParamSet;
  needSave = false;
  LoadNewData = true;
  Workspace: string;
  Editing = false;

  toLoadData() {
    this.LoadNewData = true;
  }
  /**
   * @description 从模板新建
   */
  async NewDataFromTmpl(ProjectName: string) {

    this.paramSet = new ParamSet(ProjectName);
    this.needSave = false;
    this.LoadNewData = false;
  }

  LoadDataFromExcel() {
    throw new Error('功能未实现敬请期待');
  }

  LoadDataFromJSON() {
    throw new Error('功能未实现敬请期待');
  }
  constructor() {
    this.paramSet = null;
    // this.NewDataFromTmpl('GA').then();
  }
}
