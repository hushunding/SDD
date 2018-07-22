import { TestBed, inject, async } from '@angular/core/testing';

import { ParamDataService } from './param-data.service';
import { ParamSetSchematic, ParamSet } from './Param/ParamSet';
import { NormalParamSchemtic, ParamDataSet, ParamValue } from './Param/ParamTmpl';

const SysRouteTestData = [
  // tslint:disable-next-line:max-line-length
  ['01', 'Szr.S0103', 'Szr', 'S0103', 94.1, 80, 80, 0, 100, 0, 'N/A', 'N/A', 'N/A', 'N/A', 'N/A', '0201G', 0, 94.1, 0, '0103G', 'TRUE', 564, 0, 180, 0, 180, 25, 40, 20, 60, 30],
  // tslint:disable-next-line:max-line-length
  ['01', 'S0103.S0107', 'S0103', 'S0107', 323.967, 80, 80, 0, 200, -53.8, 'Type_Loop', 'B0101', '700', 'VB0103', 9, '0207G', 0, 61.967, 0, '0109DG', 'FALSE', 758, 10, 50, 10, 50, 10, 20, 65, 160, 30],
  // tslint:disable-next-line:max-line-length
  ['01', 'X0105.Xr', 'X0105', 'Xr', 356.1, 80, 80, 0, 300, -41, 'Type_Beacon', 'N/A', 'N/A', 'VB0105', 9, '0201G', 0, 94.1, 0, 'N/A', 'FALSE', 698, 10, 50, 10, 50, 0, 0, 0, 0, 30],
];

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

    const ParamSetNames = ['Vehicle', 'Equip', 'Project', 'Config', 'SysComm'];
    for (const psn of ParamSetNames) {
      it(psn, () => {
        const paramsch: NormalParamSchemtic = ParamSetSchematic[psn];
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
