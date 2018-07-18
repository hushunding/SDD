import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainRoutingModule } from './main.route';
import { VehileParamTableComponent } from './vehile-param-table/vehile-param-table.component';
import { NormalParamTableComponent } from './normal-param-table/normal-param-table.component';
import { NeworLoadDataComponent } from './newor-load-data/newor-load-data.component';
import { EquipParamTableComponent } from './equip-param-table/equip-param-table.component';
import { ProjectParamTableComponent } from './project-param-table/project-param-table.component';
import { ConfigParamTableComponent } from './config-param-table/config-param-table.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { SysCommParamTableComponent } from './sys-comm-param-table/sys-comm-param-table.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    VehileParamTableComponent,
    NormalParamTableComponent,
    NeworLoadDataComponent,
    EquipParamTableComponent,
    ProjectParamTableComponent,
    ConfigParamTableComponent,
    MainToolbarComponent,
    SysCommParamTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MainRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
