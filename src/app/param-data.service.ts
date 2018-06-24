import { Injectable } from '@angular/core';
import { ParamSet } from './Param/ParamSet';

@Injectable({
  providedIn: 'root'
})
export class ParamDataService {

  paramSet: ParamSet;
  needSave = false;

  /**
   * @description 从模板新建
   */
  NewDataFromTmpl() {
    this.needSave = true;
  }

  LoadDataFromExcel() {
    throw new Error('功能未实现敬请期待');
  }

  LoadDataFromJSON() {
    throw new Error('功能未实现敬请期待');
  }
  constructor() {
    this.paramSet = null;
   }
}
