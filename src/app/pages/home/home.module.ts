import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeSidePanelComponent } from './home-side-panel/home-side-panel.component';

import { OverlaySidePanelModule } from '../../library/components';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    OverlaySidePanelModule
  ],
  declarations: [
    HomeComponent,
    HomeSidePanelComponent
  ],
  entryComponents: [
    HomeSidePanelComponent
  ]
})
export class HomeModule { }