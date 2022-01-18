import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInfoRoutingModule } from './account-info-routing.module';

import { AccountInfoComponent } from './account-info.component';
import { AccountInfoSidePanelComponent } from './account-info-side-panel/account-info-side-panel.component';

import { OverlaySidePanelModule } from '../../library/components';

@NgModule({
  imports: [
    CommonModule,
    AccountInfoRoutingModule,
    OverlaySidePanelModule
  ],
  declarations: [
    AccountInfoComponent,
    AccountInfoSidePanelComponent
  ],
  entryComponents: [
    AccountInfoSidePanelComponent
  ]
})
export class AccountInfoModule { }