import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-widget-menu',
  imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule],
  templateUrl: './widget-menu.component.html',
  styleUrl: './widget-menu.component.scss',
})
export class WidgetMenuComponent {
  store = inject(DashboardService);

  //FIXME: retrun this to read form WidgetAdded()
  // widgets = this.store.WidgetAdded();

  widgets = this.store.widgets();
}
