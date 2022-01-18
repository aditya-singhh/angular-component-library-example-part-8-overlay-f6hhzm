import { Component } from '@angular/core';
import { CardType, FlipAxis, OverlaySidePanelStyle, OverlaySidePanelService } from '../../library/components';

import { DashboardSidePanelComponent } from './dashboard-side-panel/dashboard-side-panel.component';
import { DashboardSidePanelMoreComponent } from './dashboard-side-panel-more/dashboard-side-panel-more.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public CardType = CardType;
  public FlipAxis = FlipAxis;
  public OverlaySidePanelStyle = OverlaySidePanelStyle;

  constructor(
    private _overlaySidePanelService: OverlaySidePanelService
  ) { }

  public showMore(): void {
    this._overlaySidePanelService.setContent(DashboardSidePanelComponent);
    this._overlaySidePanelService.show();
  }

  public showEvenMore(): void {
    this._overlaySidePanelService.setContent(DashboardSidePanelMoreComponent);
    this._overlaySidePanelService.show();
  }
}