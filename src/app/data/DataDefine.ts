
export interface INormalParamEntry {
    SeqNo?: string;
    Desc?: string;
    Unit?: string;
    Value?: string | number;
}
export interface IVhlParm {
    Veh_Marshal: INormalParamEntry;
    Veh_ConstructSpeed: INormalParamEntry;
    Veh_Length: INormalParamEntry;
    Veh_Hook2Roller: INormalParamEntry;
    Veh_Hook2Ante: INormalParamEntry;
    Veh_MaxAcc: INormalParamEntry;
    Veb_MaxDec: INormalParamEntry;
    Veh_NormDec: INormalParamEntry;
    Veh_Gebr: INormalParamEntry;
    Veh_Fsbr: INormalParamEntry;
    Veh_FsbTracCutDelay: INormalParamEntry;
    Veh_EbTracCutDelay: INormalParamEntry;
    Veh_FsbSetDelay: INormalParamEntry;
    Veh_GebSetDelay: INormalParamEntry;
    Veh_EbCoastTime: INormalParamEntry;
    Veh_FsbCoastTime: INormalParamEntry;
    Veh_WheelSurfaceErr: INormalParamEntry;
    Veh_MaxWheelDiameter: INormalParamEntry;
    Veh_MinWheelDiameter: INormalParamEntry;
    Veh_DoorWidth: INormalParamEntry;
    Veh_CollisionSpd: INormalParamEntry;
}
