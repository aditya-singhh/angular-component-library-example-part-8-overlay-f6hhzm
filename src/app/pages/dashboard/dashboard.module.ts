import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule, OverlaySidePanelModule } from '../../library/components';
import { SharedModule } from '../../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardSidePanelComponent } from './dashboard-side-panel/dashboard-side-panel.component';

import { DashboardSidePanelMoreComponent } from './dashboard-side-panel-more/dashboard-side-panel-more.component'

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    DashboardRoutingModule,
    OverlaySidePanelModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    DashboardSidePanelComponent,
    DashboardSidePanelMoreComponent
  ],
  entryComponents: [ 
    DashboardSidePanelComponent,
    DashboardSidePanelMoreComponent
  ]
})
export class DashboardModule { }