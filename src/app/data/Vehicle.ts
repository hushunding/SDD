import { ParamData } from "./TableSchemtic";

export interface IVhlParm extends ParamData {
    Veh_Marshal: number;
    Veh_ConstructSpeed: number;
    Veh_Length: number;
    Veh_Hook2Roller: number;
    Veh_Hook2Ante: number;
    Veh_MaxAcc: number;
    Veb_MaxDec: number;
    Veh_NormDec: number;
    Veh_Gebr: number;
    Veh_Fsbr: number;
    Veh_FsbTracCutDelay: number;
    Veh_EbTracCutDelay: number;
    Veh_FsbSetDelay: number;
    Veh_GebSetDelay: number;
    Veh_EbCoastTime: number;
    Veh_FsbCoastTime: number;
    Veh_WheelSurfaceErr: number;
    Veh_MaxWheelDiameter: number;
    Veh_MinWheelDiameter: number;
    Veh_DoorWidth: number;
    Veh_CollisionSpd: number;
}

export const DefualtVhlParm: IVhlParm = {
    Veh_Marshal: 3,
    Veh_ConstructSpeed: 90,
    Veh_Length: 60,
    Veh_Hook2Roller: 4.013,
    Veh_Hook2Ante: 7.04,
    Veh_MaxAcc: 0.88,
    Veb_MaxDec: 1,
    Veh_NormDec: 0.6,
    Veh_Gebr: 0.8,
    Veh_Fsbr: 1,
    Veh_FsbTracCutDelay: 1600,
    Veh_EbTracCutDelay: 1600,
    Veh_FsbSetDelay: 1500,
    Veh_GebSetDelay: 1000,
    Veh_EbCoastTime: 400,
    Veh_FsbCoastTime: 400,
    Veh_WheelSurfaceErr: 5,
    Veh_MaxWheelDiameter: 1.006,
    Veh_MinWheelDiameter: 0.986,
    Veh_DoorWidth: 1.3,
    Veh_CollisionSpd: 3
}
