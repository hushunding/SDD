import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { VehileParamTableComponent } from './vehile-param-table/vehile-param-table.component';
import { EquPrjParamTableComponent } from './equ-prj-param-table/equ-prj-param-table.component';
 
 
const appRoutes: Routes = [
  { path: 'vhl',        component: VehileParamTableComponent },
  { path: 'ep',        component: EquPrjParamTableComponent },
  { path: "", redirectTo:"vhl", pathMatch: 'full'}
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}