import { VehicleSchemtic, VehicleParam } from './Vehicle';
import { EquipSchmtic, EquipParam } from './Equip';
import { ProjectSchmetic, ProjectParam } from './Project';
import { ConfigSchematic, ConfigParam } from './Config';
import { NormalParamSchemtic, ParamDataSet, ParamValue, ParamRemark} from './ParamTmpl';

interface ParamSetVersion {
    Macro: string;        // 整体版本，模板为SDD整体版本，数据为最终的版本
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
    // 输出-一般参数
    // 输出-路由参数
    // 附录参数
}

export type ParamSetSchemtic = ParamSetTmpl<NormalParamSchemtic>;

export const schematic: ParamSetTmpl<NormalParamSchemtic> = {
    Version: {
        Macro: 'V2.4',
        Schemtic: 'V2.4.0',
        Input: 'V0.1.0',            // 模板值
        ProjectName: 'Schemtic',
        Log: [['V2.4', 'Excel转APP,之前的修订记录见原SDD']]
    },
    Vehicle: VehicleSchemtic,   // 车辆参数
    Equip: EquipSchmtic,        // 设备参数
    Project: ProjectSchmetic,   // 线路参数
    Config: ConfigSchematic     // 系统特性参数
};

export class ParamSet  {
    Version = schematic.Version;
    Vehicle = GetDefaultParamDataSet(VehicleParam);
    Equip =  GetDefaultParamDataSet(EquipParam);
    Project =  GetDefaultParamDataSet(ProjectParam);
    Config = GetDefaultParamDataSet(ConfigParam);
}

export function GetDefaultParamDataSet<ParamT extends ParamValue>(c: { new(): ParamT; }): ParamDataSet<ParamT> {
    const paramRemark: ParamRemark = {};
    const GA = new c();
    for (const key in GA) {
        if (GA.hasOwnProperty(key)) {
            const element = GA[key];
            GA[key] = element;
            paramRemark[key] = '';
        }
    }
    return { paramSerial: [{ Name: 'GA', Data: GA }], paramRemark, editing: true };
}
