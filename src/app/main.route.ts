import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { VehileParamTableComponent } from './vehile-param-table/vehile-param-table.component';
import { EquipParamTableComponent } from './equip-param-table/equip-param-table.component';
import { ProjectParamTableComponent } from './project-param-table/project-param-table.component';
import { ConfigParamTableComponent } from './config-param-table/config-param-table.component';
import { SysCommParamTableComponent } from './sys-comm-param-table/sys-comm-param-table.component';
import { RouteParamTableComponent } from './route-param-table/route-param-table.component';
import { ComRouteParamTableComponent } from './com-route-param-table/com-route-param-table.component';

const appDefaultRout: Route = { path: '', redirectTo: 'vhl', pathMatch: 'full' };
export const appInputRoutes: Routes = [
  { path: 'vhl', component: VehileParamTableComponent, data: { Name: '车辆参数' } },
  { path: 'eq', component: EquipParamTableComponent, data: { Name: '设备参数' } },
  { path: 'prj', component: ProjectParamTableComponent, data: { Name: '线路参数' } },
  { path: 'cnf', component: ConfigParamTableComponent, data: { Name: '系统基本参数' } },
];

export const appOutRoutes: Routes = [
  { path: 'sys', component: SysCommParamTableComponent, data: { Name: '系统通用参数' } },
  { path: 'route1', component: ComRouteParamTableComponent, data: { Name: '系统进路参数' } },
  { path: 'route2', component: RouteParamTableComponent, data: { Name: '系统进路参数' } }
];

const appRoutes: Routes = [appDefaultRout, ...appInputRoutes, ...appOutRoutes];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
