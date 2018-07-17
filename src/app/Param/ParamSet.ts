import { VehicleSchemtic, VehicleParam } from './Vehicle';
import { EquipSchmtic, EquipParam } from './Equip';
import { ProjectSchmetic, ProjectParam } from './Project';
import { ConfigSchematic, ConfigParam } from './Config';
import { NormalParamSchemtic, ParamDataSet, ParamValue, ParamRemark } from './ParamTmpl';
import { SysCommSchemtic, SysCommParam } from './SysComm';

interface ParamSetVersion {
    Macro?: string;        // 整体版本，模板为SDD整体版本，数据为最终的版本
    Schemtic: string;     // 模板版本,VA.B.C ,A跟随整体版本，B表示破坏性变更，需要提供额外的参数和删除无效的参数，C表示公式变更，
    Input: string;        // 输入数据版本，
    ProjectName: string;  // 项目名称
    LastModifyTime?: Date; // 最后修改时间
    Log: Array<Array<string>>; // 修改日志
}

interface ParamSetTmpl<T> {
    Version: ParamSetVersion;
    Vehicle: T;     // 车辆参数
    Equip: T;       // 设备参数
    Project: T;     // 线路参数
    Config: T;      // 系统特性参数
    SysComm: T;  // 输出-一般参数
    // 输出-路由参数
    // 附录参数
}

export type ParamSetSchemtic = ParamSetTmpl<NormalParamSchemtic>;

export const schematic: ParamSetTmpl<NormalParamSchemtic> = {
    Version: {
        Macro: 'V2.4',
        Schemtic: 'V2.4.0',
        Input: 'V0.1.0',            // 默认值版本
        ProjectName: 'Schemtic',
        Log: [['V2.4', 'Excel转APP,之前的修订记录见原SDD']]
    },
    Vehicle: VehicleSchemtic,   // 车辆参数
    Equip: EquipSchmtic,        // 设备参数
    Project: ProjectSchmetic,   // 线路参数
    Config: ConfigSchematic,     // 系统特性参数
    SysComm: SysCommSchemtic     // 输出-通用参数
};

export class ParamSet {
    Version: ParamSetVersion;
    Vehicle = GetDefaultParamDataSet(new VehicleParam(), schematic.Vehicle);
    Equip = GetDefaultParamDataSet(new EquipParam(), schematic.Equip);
    Project = GetDefaultParamDataSet(new ProjectParam(), schematic.Project);
    Config = GetDefaultParamDataSet(new ConfigParam(), schematic.Config);
    SysComm = GetDefaultParamDataSet(this.NewSysComm(0), schematic.SysComm);

    constructor(ProjectName: string) {
        this.Version = {
            Schemtic: schematic.Version.Schemtic,         // 依据模板版本，
            Input: 'V0.1.0',                              // 初始版本值
            ProjectName: ProjectName,
            Log: [['V0.1.0', `根据${schematic.Version.Macro}模板创建`]],
            LastModifyTime: new Date(Date.now())
        };
    }
    NewSysComm(index: number) {
        return new SysCommParam(
            this.Vehicle.paramSerial[index].Data,
            this.Equip.paramSerial[0].Data,
            this.Project.paramSerial[0].Data,
            this.Config.paramSerial[0].Data);
    }
}

export function GetDefaultParamDataSet<ParamT extends ParamValue>(GA: ParamT, tmpl: NormalParamSchemtic): ParamDataSet<ParamT> {
    const paramRemark: ParamRemark = {};
    for (const key in tmpl) {
        if (tmpl.hasOwnProperty(key)) {
            paramRemark[key] = tmpl[key].Comment;
        }
    }
    return { paramSerial: [{ Name: 'GA', Data: GA }], paramRemark, editing: true };
}
