
export const schematic = {
    Version: "2.4",
    Vehicle: {  //车辆参数
        Veh_Marshal: {
            Desc: "列车编组方式", Uint: "辆", Provider: "车辆供应商",
            Scole: { type: "number", min: 3, max: 8, step: 1 }
        },
        Veh_ConstructSpeed: {
            Desc: "列车构造速度", Uint: "km/h", Provider: "车辆供应商",
            Scole: { type: "number", min: 70, max: 160, step: 5 }
        },
        Veh_Length: {
            Desc: "列车长度（一端车钩到另一端车钩）", Uint: "m", Provider: "车辆供应商",
            Scole: { type: "number", min: 30, max: 180, step: 0.001 }
        },
        Veh_Hook2Roller: {
            Desc: "列车车钩到第一轮对距离（可被区段占用检测设备识别）", Uint: "m", Provider: "车辆供应商",
            Scole: { type: "number", min: 3, max: 5, step: 0.001 }
        },
        Veh_Hook2Ante: {
            Desc: "列车车钩到天线中心距离", Uint: "m", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 100, step: 0.001 }
        },
        Veh_MaxAcc: {
            Desc: "列车最大牵引加速度（不含空转、不含坡度）", Uint: "m/s/s", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.01 }
        },
        Veb_MaxDec: {
            Desc: "列车最大制动减速度（不含打滑、不含坡度）", Uint: "m/s/s", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.01 }
        },
        Veh_NormDec: {  // todo 移到线路参数
            Desc: "列车常用制动率", Uint: "m/s/s", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.01 }
        },
        Veh_Gebr: {
            Desc: "可保证的EB制动率GEBR（考虑线路最差环境条件）", Uint: "m/s/s", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.01 }
        },
        Veh_Fsbr: {
            Desc: "列车全常用制动率", Uint: "m/s/s", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.01 }
        },
        Veh_FsbTracCutDelay: {
            Desc: "FSB命令下的牵引切除时间（牵引系统收到车载FSB指令到牵引切除所需要的时间）", Uint: "ms", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 2000, step: 10 }
        },
        Veh_EbTracCutDelay: {
            Desc: "EB命令下的牵引切除延迟时间（牵引系统收到车载EB指令到牵引切除所需要的时间）", Uint: "ms", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 2000, step: 10 }
        },
        Veh_FsbSetDelay: {
            Desc: "FSB建立时间（制动系统从10%至90%建立所需要的时间）", Uint: "ms", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 2000, step: 10 }
        },
        Veh_GebSetDelay: {
            Desc: "可保证EB制动率建立时间（制动系统从10%制动力至90%制动力建立所需要的时间。若牵引完全切除时10%制动力已建立，则该值为牵引完全切除到90%制动力建立时间）", Uint: "ms", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 2000, step: 10 }
        },
        Veh_EbCoastTime: {
            Desc: "EB惰行时间（牵引切除至10%制动力的建立。若牵引完全切除时10%制动力已建立，则该值为零）", Uint: "ms", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 2000, step: 10 }
        },
        Veh_FsbCoastTime: {
            Desc: "FSB惰行时间（牵引切除至10%制动力的建立）", Uint: "ms", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 2000, step: 10 }
        },
        Veh_WheelSurfaceErr: {
            Desc: "车轮踏面外形尺寸误差", Uint: "‰", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 10, step: 1 }
        },
        Veh_MaxWheelDiameter: {
            Desc: "车轮最大轮径", Uint: "m", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.001 }
        },
        Veh_MinWheelDiameter: {
            Desc: "车轮最小轮径", Uint: "m", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.001 }
        },
        Veh_DoorWidth: {
            Desc: "车门宽度", Uint: "m", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 2, step: 0.001 }
        },
        Veh_CollisionSpd: {
            Desc: "车钩可接受的最大撞击速度", Uint: "km/h", Provider: "车辆供应商",
            Scole: { type: "number", min: 0, max: 25, step: 1 }
        },

    },
    Equip: {
        Equ_RadarPulseDist: {
            Desc: "多普勒雷达脉冲代表距离", Uint: "m", Provider: "雷达供货方",
            Scole: { type: "number", min: 0, max: 25, step: 0.001 }
        },
        Equ_RadarTrigSpd: {
            Desc: "多普勒雷达激活速度", Uint: "km/h", Provider: "雷达供货方",
            Scole: { type: "number", min: 0, max: 25, step: 1 }
        },
        Equ_RadarSpdDiff: {
            Desc: "多普勒雷达的测速误差", Uint: "m/s", Provider: "雷达供货方",
            Scole: { type: "number", min: 0, max: 5, step: 0.01 }
        },
        Equ_RadarCycle: {
            Desc: "多普勒雷达报文发送周期", Uint: "ms", Provider: "雷达供货方",
            Scole: { type: "number", min: 0, max: 1000, step: 50 }
        },
        Equ_CyclePulseCount: {
            Desc: "速度计单圈脉冲点个数", Uint: "个", Provider: "速度计供货方",
            Scole: { type: "number", min: 200, max: 200, step: 1 }
        },
        Equ_BeaconReadDiff: {
            Desc: "信标读取旁瓣误差", Uint: "m", Provider: "信标供货方",
            Scole: { type: "number", min: 0, max: 0.5, step: 0.01 }
        },
        Equ_AxleClearDelay: {
            Desc: "计轴占用->出清反应时间（需含继电器动作时间）", Uint: "ms", Provider: "计轴供货方",
            Scole: { type: "number", min: 0, max: 2000, step: 10 }
        },
        Equ_AxleOccupyDelay: {
            Desc: "计轴出清->占用反应时间（需含继电器动作时间）", Uint: "ms", Provider: "计轴供货方",
            Scole: { type: "number", min: 0, max: 500, step: 10 }
        },
        Equ_PsdProcessDelay: {
            Desc: "PSC处理时间（PSC收到开门指令到指令处理完成以及状态返回的时间）", Uint: "ms", Provider: "PSD供货方",
            Scole: { type: "number", min: 0, max: 1000, step: 10 }
        },
        Equ_PsdWidth: {
            Desc: "屏蔽门宽度", Uint: "m", Provider: "PSD供货方",
            Scole: { type: "number", min: 0, max: 1.5, step: 0.001 }
        },
        Equ_BeaconWriteDelay: { // todo 移入过程参数
            Desc: "联锁信息写入应答器/信标时间", Uint: "ms", Provider: "信标供货方",
            Scole: { type: "number", min: 0, max: 5000, step: 1 }
        },
        Equ_CollisionSpd: {
            Desc: "车挡可接受的最大撞击速度", Uint: "km/h", Provider: "运营方",
            Scole: { type: "number", min: 0, max: 25, step: 1 }
        },
        Equ_LoopComDelay: {
            Desc: "CBI通过通信环线与CC通信延迟时间（若无参考输入，以CFG_T_CBI_ALIVE_TO_CC为准）", Uint: "ms", Provider: "环线供应方",
            Scole: { type: "number", min: 0, max: 6000, step: 100 }
        },
        Equ_PsdRelayEnergDelay: {
            Desc: "屏蔽门控制继电器吸起时间", Uint: "ms", Provider: "继电器技术规格书",
            Scole: { type: "number", min: 0, max: 1000, step: 1 }
        },
        Equ_PsdClsRelayRlsDelay: {
            Desc: "屏蔽门全关闭状态继电器落下时间", Uint: "ms", Provider: "继电器技术规格书",
            Scole: { type: "number", min: 0, max: 100, step: 1 }
        },

    },
    Project: {
        // todo 待更新Scole
        Proj_MinVehicleLength: { Desc: "最小线上列车长度，不论是装备了信号系统设备的列车还是未装备信号系统设备的列车（最坏情况下的长度）。该长度的测量应从一列车一边的最突出端到另一边的最突出端。", Uint: "m", Provider: "运营方" },
        Proj_MinHook2Roller: { Desc: "线上最短列车车钩到第一轮对距离（可被区段占用检测设备识别）", Uint: "m", Provider: "运营方" },
        Proj_PlatSpdLimit: { Desc: "站台永久限速", Uint: "km/h", Provider: "线路数据" },
        Proj_MaxLineGrad: { Desc: "线路最差下坡坡度（按绝对值取值）", Uint: "‰", Provider: "线路数据" },
        Proj_MaxPlatGrad: { Desc: "站台最差下坡坡度（按绝对值取值）", Uint: "‰", Provider: "线路数据" },
        Proj_Sp2AxleDist: { Desc: "停车点距离站台区段计轴最大距离", Uint: "m", Provider: "线路数据" },
        Proj_LineSpdLimit: { Desc: "线路最高限速", Uint: "km/h", Provider: "线路数据" },
        Proj_BeaconFixDiff: { Desc: "信标安装误差(轮径校准、精确停车)", Uint: "m", Provider: "工程安装" },
        Proj_Sig2AxleDist: { Desc: "信号机到关联计轴最大距离", Uint: "m", Provider: "线路数据" },
        Proj_MinSp2SigJumpDist: { Desc: "车辆段跳跃区域的停车位置车钩与信号机最小间距", Uint: "m", Provider: "线路数据" },
        Proj_MinSp2EndJumpDist: { Desc: "车辆段跳跃区域的停车位置车钩与车挡最小间距", Uint: "m", Provider: "线路数据" },
        Proj_MaxDistBcn2SpJump: { Desc: "车辆段跳跃区域的停车位置与最近精确停车信标最大间距", Uint: "m", Provider: "线路数据" },
        Proj_MinSp2EndOpenDist: { Desc: "开口防护停车点到前方车挡距离", Uint: "m", Provider: "线路数据" },
        Proj_MinSp2HookOpenDist: { Desc: "开口防护停车点到前方车钩距离（列检库存在两个停车位的情况下，入口处停车位到尽头停车位停稳列车车钩的距离）", Uint: "m", Provider: "线路数据" },
        Proj_MaxDistBcn2SpOpen: { Desc: "开口防护停车点与最近精确停车信标的最大间距", Uint: "m", Provider: "线路数据" },
        Proj_MinDriverSpd: { Desc: "运营方对点式/CBTC模式下司机控车的最小运行速度要求，若无要求，则填0", Uint: "km/h", Provider: "运营方" },
        Proj_RmMaxForwSpd: { Desc: "RM模式下前进EB触发速度（达到该速度即触发EB）", Uint: "km/h", Provider: "招投标文件" },
        Proj_RmMaxBackwSpd: { Desc: "RM模式下退行EB触发速度（达到该速度即触发EB）", Uint: "km/h", Provider: "招投标文件" },
        Proj_EumMaxSpd: { Desc: "EUM模式下最高限速", Uint: "km/h", Provider: "招投标文件" },
        Proj_MaxRollBackDist: { Desc: "车载允许退行的最大距离", Uint: "m", Provider: "招投标文件" },
        Proj_HandOverCBIDelay: { Desc: "CBI交接区通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_HandOverZCDelay: { Desc: "ZC交接区通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_Zc2CbiDelay: { Desc: "ZC->CBI通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_Cbi2ZcDelay: { Desc: "CBI->ZC通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_Zc2CcDelay: { Desc: "ZC->CC通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_Cc2ZcDelay: { Desc: "CC->ZC通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_Cbi2CcDelay: { Desc: "CBI->CC通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_Cc2CbiDelay: { Desc: "CC->CBI通信延迟（互联互通项目），无相关要求则填0", Uint: "ms", Provider: "互联互通厂家确认" },
        Proj_IAtpCommMode: {
            Desc: "项目点式车地通信方式："
                + "\nType_Beacon-基于信标；"
                + "\nType_Loop-基于环线；"
                + "\nType_Both-项目中既有信标又有环线", Uint: "无", Provider: "平面图"
        },
        Proj_ReverseTractCmd: {
            Desc: "项目是否考虑反向牵引输出："
                + "\n1.对于CBTC项目，若激活端车载信号仅输出向前指令，选false；若激活端车载信号可输出向后指令，选true；"
                + "\n2.对于无人驾驶项目，若系统配备跳跃功能，应选true；无跳跃功能时，参考CBTC项目。", Uint: "无", Provider: "项目系统设计"
        },
    },
    Config: {
        Conf_LocDiff: { Desc: "最大定位误差", Uint: "m", Provider: "《城市轨道交通CBTC信号系统行业技术规范需求规范》" },
        Conf_MaxSlideBackDist: { Desc: "后溜安全检测距离", Uint: "m", Provider: "系统默认配置" },
        Conf_ReleaseSpd: { Desc: "点式释放限速", Uint: "km/h", Provider: "系统默认配置" },
        Conf_SafeMarginDist: { Desc: "ATP安全距离阈量", Uint: "m", Provider: "系统默认配置" },
        Conf_BilockCycle: { Desc: "CBI子系统周期", Uint: "ms", Provider: "系统默认配置" },
        Conf_BizcCycle: { Desc: "ZC子系统周期", Uint: "ms", Provider: "系统默认配置" },
        Conf_BiccCycle: { Desc: "CC子系统周期", Uint: "ms", Provider: "系统默认配置" },
        Conf_BiviewCycle: { Desc: "ATS子系统心跳报文发送周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Cbi2ZcCycle: { Desc: "CBI->ZC通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Zc2CbiCycle: { Desc: "ZC->CBI通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Zc2CcCycle: { Desc: "ZC->CC通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Cc2ZcCycle: { Desc: "CC->ZC通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Cc2CbiCycle: { Desc: "CC->CBI通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Cbi2CcCycle: { Desc: "CBI->CC通信周期(使用通信环线时，周期为250)", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Cc2AtsCycle: { Desc: "CC->ATS通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Zc2AtsCycle: { Desc: "ZC->ATS通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Cbi2AtsCycle: { Desc: "CBI->ATS通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Zc2ZcCycle: { Desc: "ZC->ZC通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_Cbi2CbiCycle: { Desc: "CBI->CBI通信周期", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_DcsDelay: { Desc: "DCS网络传输延迟+节点恢复时间", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_NetworkMargin: { Desc: "无线网络丢包宽恕", Uint: "ms", Provider: "《ZHKJ-YF-BiTRACON800-IIDS-01-1 BiTRACON 800系统内部接口规格书》" },
        Conf_VobOutTime_CC: { Desc: "CC业务报文通过VOB板输出延时（含VC板和VOB板处理时间及SR6继电器释放时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_31&38]" },
        Conf_VibInTime_CC: { Desc: "外部报文通过VIB板到CC业务的延时（含VC板和VIB板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_38]" },
        Conf_ComOutTime_CC: { Desc: "CC业务报文通过COM板输出延时（含VC板和COM板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_33]" },
        Conf_ComInTime_CC: { Desc: "外部报文通过COM板到CC业务的延时（含VC板和COM板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_33]" },
        Conf_ComOutTime_ZC: { Desc: "ZC业务报文通过COM板输出延时（含VC板和COM板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_33]" },
        Conf_ComInTime_ZC: { Desc: "外部报文通过COM板到ZC业务的延时（含VC板和COM板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_33]" },
        Conf_VobOutTime_CBI: { Desc: "CBI业务报文通过VOB板输出延时（含SR6继电器释放时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_31&38]" },
        Conf_VibInTime_CBI: { Desc: "外部报文通过VIB板到CBI业务的延时（含VC板和VIB板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_38]" },
        Conf_ComOutTime_CBI: { Desc: "CBI业务报文通过COM板输出延时（含VC板和COM板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_33]" },
        Conf_ComInTime_CBI: { Desc: "外部报文通过COM板到CBI业务的延时（含VC板和COM板处理时间）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_33]" },
        Conf_PPUProcTime: { Desc: "PPU板处理时间（供ATP采集）", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_34]" },
        Conf_BtmSendDelay: { Desc: "列车经过信标到业务收到信标报文数据的最大延迟", Uint: "ms", Provider: "《ZHJD-YF-BiSTAR-RAMS-02-1 BiSTAR平台系统安全应用条件》[BiSTAR_SRAC_34]" },
    }

}