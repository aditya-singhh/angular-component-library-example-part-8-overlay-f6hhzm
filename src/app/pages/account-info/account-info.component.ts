import { Component, AfterViewInit } from '@angular/core';

import { OverlaySidePanelService } from '../../library/components';
import { AccountInfoSidePanelComponent } from './account-info-side-panel/account-info-side-panel.component';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements AfterViewInit {

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) { }

  ngAfterViewInit () {
    this._overlaySidePanelService.setContent(AccountInfoSidePanelComponent);
  }

  public show(): void {
    this._overlaySidePanelService.show();
  }
}