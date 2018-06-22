export interface NumberScole { type: "number"; min: number; max: number; step: number }
export interface INormalParamEntry {
    Desc: string;
    Uint: string;
    Provider: string;
    Scole: NumberScole;
}

export interface NormalParamTableSchemtic {
    [key: string]: INormalParamEntry;
}

export interface ParamData {
    [key: string]: (number | string);
}
export interface ParamDataSet {
    paramSerial: Array<{
        Name: string;
        Data: ParamData
    }>;
    paramRemark:ParamData;
}