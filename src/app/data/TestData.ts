import { ParamDataSet, ParamData } from "./TableSchemtic";
import { DefualtVhlParm } from "./Vehicle";

export let TestVhlParam: ParamDataSet = {
    paramSerial: [
        {
            Name:"GA1",
            Data: DefualtVhlParm
        },
        {
            Name:"GA2",
            Data: DefualtVhlParm
        }
    ],
    paramRemark: {
        Veh_Marshal: "",
        Veh_ConstructSpeed: "",
        Veh_Length: "",
        Veh_Hook2Roller: "",
        Veh_Hook2Ante: "",
        Veh_MaxAcc: "",
        Veb_MaxDec: "",
        Veh_NormDec: "",
        Veh_Gebr: "",
        Veh_Fsbr: "",
        Veh_FsbTracCutDelay: "",
        Veh_EbTracCutDelay: "",
        Veh_FsbSetDelay: "",
        Veh_GebSetDelay: "",
        Veh_EbCoastTime: "",
        Veh_FsbCoastTime: "",
        Veh_WheelSurfaceErr: "",
        Veh_MaxWheelDiameter: "",
        Veh_MinWheelDiameter: "",
        Veh_DoorWidth: "",
        Veh_CollisionSpd: "",
    }
}