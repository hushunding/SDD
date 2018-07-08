import { TestBed, inject, async } from '@angular/core/testing';

import { ParamDataService } from './param-data.service';
import { schematic, ParamSet } from './Param/ParamSet';
import { NormalParamSchemtic, ParamDataSet, ParamValue } from './Param/ParamTmpl';

describe('ParamDataService', () => {
  let paramDS: ParamDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamDataService]
    });
    paramDS = new ParamDataService();
  });

  it('should be created', inject([ParamDataService], (service: ParamDataService) => {
    expect(service).toBeTruthy();
  }));

  it('editing is false', () => {
    expect(paramDS.Editing).toBe(false);
  });

  describe('fromTmp', () => {

    let paramSet: ParamSet;
    beforeEach(async(() => {
      paramDS = new ParamDataService();
      paramDS.NewDataFromTmpl('GA').then(() => {
        paramSet = paramDS.paramSet;
      });
    }));

    const ParamSetNames = ['Vehicle', 'Equip', 'Project', 'Config'];
    for (const psn of ParamSetNames) {
      it(psn, () => {
        const paramsch: NormalParamSchemtic = schematic[psn];
        const paramdat: ParamValue = paramSet[psn].paramSerial[0].Data;

        for (const key in paramsch) {
          if (paramsch.hasOwnProperty(key)) {
            const element = paramsch[key];
            expect(paramdat[key]).toBe(element.Default);
          }
        }
      });
    }
  });


});
