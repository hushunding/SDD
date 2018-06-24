import { NormalParamTmpl, NumberParamEntry } from './ParamTmpl';

export interface ConfigParmTmpl<T> extends NormalParamTmpl<T> {
    Conf_LocDiff: T;
    Conf_MaxSlideBackDist: T;
    Conf_ReleaseSpd: T;
    Conf_SafeMarginDist: T;
    Conf_BilockCycle: T;
    Conf_BizcCycle: T;
    Conf_BiccCycle: T;
    Conf_BiviewCycle: T;
    Conf_Cbi2ZcCycle: T;
    Conf_Zc2CbiCycle: T;
    Conf_Zc2CcCycle: T;
    Conf_Cc2ZcCycle: T;
    Conf_Cc2CbiCycle: T;
    Conf_Cbi2CcCycle: T;
    Conf_Cc2AtsCycle: T;
    Conf_Zc2AtsCycle: T;
    Conf_Cbi2AtsCycle: T;
    Conf_Zc2ZcCycle: T;
    Conf_Cbi2CbiCycle: T;
    Conf_DcsDelay: T;
    Conf_NetworkMargin: T;
    Conf_VobOutTime_CC: T;
    Conf_VibInTime_CC: T;
    Conf_ComOutTime_CC: T;
    Conf_ComInTime_CC: T;
    Conf_ComOutTime_ZC: T;
    Conf_ComInTime_ZC: T;
    Conf_VobOutTime_CBI: T;
    Conf_VibInTime_CBI: T;
    Conf_ComOutTime_CBI: T;
    Conf_ComInTime_CBI: T;
    Conf_PPUProcTime: T;
    Conf_BtmSendDelay: T;
}


export type ConfigParam = ConfigParmTmpl<number>;
export type ConfigParamSchemtic = ConfigParmTmpl<NumberParamEntry>;

class ConfigSchematicClass implements ConfigParamSchemtic {
    [key: string]: NumberParamEntry;
    // todo 待更新Scole,将平台参数转为公式
    Conf_LocDiff: NumberParamEntry = {
        Desc: '最大定位误差', Uint: 'm', Provider: '《城市轨道交通CBTC信号系统行业技术规范需求规范》',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 10
    };
    Conf_MaxSlideBackDist: NumberParamEntry = {
        Desc: '后溜安全检测距离', Uint: 'm', Provider: '系统默认配置',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 0.5
    };
    Conf_ReleaseSpd: NumberParamEntry = {
        Desc: '点式释放限速', Uint: 'km/h', Provider: '系统默认配置',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 15
    };
    Conf_SafeMarginDist: NumberParamEntry = {
        Desc: 'ATP安全距离阈量', Uint: 'm', Provider: '系统默认配置',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 5
    };
    Conf_BilockCycle: NumberParamEntry = {
        Desc: 'CBI子系统周期', Uint: 'ms', Provider: '系统默认配置',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_BizcCycle: NumberParamEntry = {
        Desc: 'ZC子系统周期', Uint: 'ms', Provider: '系统默认配置',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_BiccCycle: NumberParamEntry = {
        Desc: 'CC子系统周期', Uint: 'ms', Provider: '系统默认配置',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 150
    };
    Conf_BiviewCycle: NumberParamEntry = {
        Desc: 'ATS子系统心跳报文发送周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Cbi2ZcCycle: NumberParamEntry = {
        Desc: 'CBI->ZC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Zc2CbiCycle: NumberParamEntry = {
        Desc: 'ZC->CBI通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Zc2CcCycle: NumberParamEntry = {
        Desc: 'ZC->CC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Cc2ZcCycle: NumberParamEntry = {
        Desc: 'CC->ZC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 300
    };
    Conf_Cc2CbiCycle: NumberParamEntry = {
        Desc: 'CC->CBI通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 150
    };
    Conf_Cbi2CcCycle: NumberParamEntry = {
        Desc: 'CBI->CC通信周期(使用通信环线时，通信周期为250)', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Cc2AtsCycle: NumberParamEntry = {
        Desc: 'CC->ATS通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 300
    };
    Conf_Zc2AtsCycle: NumberParamEntry = {
        Desc: 'ZC->ATS通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Cbi2AtsCycle: NumberParamEntry = {
        Desc: 'CBI->ATS通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Zc2ZcCycle: NumberParamEntry = {
        Desc: 'ZC->ZC通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_Cbi2CbiCycle: NumberParamEntry = {
        Desc: 'CBI->CBI通信周期', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 500
    };
    Conf_DcsDelay: NumberParamEntry = {
        Desc: 'DCS网络传输延迟+节点恢复时间', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 200
    };
    Conf_NetworkMargin: NumberParamEntry = {
        Desc: '无线网络丢包宽恕', Uint: 'ms', Provider: '系统内部接口规格书',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 3000
    };
    Conf_VobOutTime_CC: NumberParamEntry = {
        Desc: 'CC业务报文通过VOB板输出延时（含VC板和VOB板处理时间及SR6继电器释放时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_31&38]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: this.Conf_BiccCycle.Default * 2 + 25
    };
    Conf_VibInTime_CC: NumberParamEntry = {
        Desc: '外部报文通过VIB板到CC业务的延时（含VC板和VIB板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_38]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 430
    };
    Conf_ComOutTime_CC: NumberParamEntry = {
        Desc: 'CC业务报文通过COM板输出延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 250
    };
    Conf_ComInTime_CC: NumberParamEntry = {
        Desc: '外部报文通过COM板到CC业务的延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 400
    };
    Conf_ComOutTime_ZC: NumberParamEntry = {
        Desc: 'ZC业务报文通过COM板输出延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 600
    };
    Conf_ComInTime_ZC: NumberParamEntry = {
        Desc: '外部报文通过COM板到ZC业务的延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1100
    };
    Conf_VobOutTime_CBI: NumberParamEntry = {
        Desc: 'CBI业务报文通过VOB板输出延时（含SR6继电器释放时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_31&38]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 587
    };
    Conf_VibInTime_CBI: NumberParamEntry = {
        Desc: '外部报文通过VIB板到CBI业务的延时（含VC板和VIB板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_38]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1130
    };
    Conf_ComOutTime_CBI: NumberParamEntry = {
        Desc: 'CBI业务报文通过COM板输出延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 600
    };
    Conf_ComInTime_CBI: NumberParamEntry = {
        Desc: '外部报文通过COM板到CBI业务的延时（含VC板和COM板处理时间）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_33]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1100
    };
    Conf_PPUProcTime: NumberParamEntry = {
        Desc: 'PPU板处理时间（供ATP采集）', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_34]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 150
    };
    Conf_BtmSendDelay: NumberParamEntry = {
        Desc: '列车经过信标到业务收到信标报文数据的最大延迟', Uint: 'ms', Provider: 'BiSTAR平台系统安全应用条件[BiSTAR_SRAC_34]',
        Scole: { type: 'number', min: 0, max: 10000, step: 1 }, Default: 1000
    };
}
export const ConfigSchematic: ConfigParamSchemtic = new ConfigSchematicClass();
