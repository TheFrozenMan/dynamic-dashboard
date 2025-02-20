import { WidgetComponent } from './../../components/widget/widget.component';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Widget } from '../../interfaces/widget';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, SharedModule, WidgetComponent],
  templateUrl: './dashboard-admin.component.html',
  providers: [DashboardService],
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent {
  store = inject(DashboardService);
  dataExist: boolean = true;

  //TODO: re think the way of passing the content it is not spoues to be a text
}
