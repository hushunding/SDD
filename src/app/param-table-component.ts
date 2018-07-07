import { NormalParamSchemtic, ParamValue, ParamDataSet } from './Param/ParamTmpl';

export interface ParamTableComponent {
    ParamSchemtic: NormalParamSchemtic;
    ParamDataSet: ParamDataSet<ParamValue>;
    Editing: boolean;
}
