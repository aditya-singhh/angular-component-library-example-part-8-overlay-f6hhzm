import { Component, AfterViewInit } from '@angular/core';
import { OverlaySidePanelService } from '../../library/components';

import { HomeSidePanelComponent } from './home-side-panel/home-side-panel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) { }

  ngAfterViewInit() {
    this._overlaySidePanelService.setContent(HomeSidePanelComponent);
  }

  public show(): void {
    this._overlaySidePanelService.show();
  }
}