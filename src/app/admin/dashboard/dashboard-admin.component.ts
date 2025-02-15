import { UsersComponent } from './../../components/users/users.component';
import { WidgetComponent } from './../../components/widget/widget.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Widget } from '../../interfaces/widget';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, SharedModule, WidgetComponent],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent {
  dataExist: boolean = false;
  data: Widget = {
    id: 0,
    name: 'statistic',
    content: UsersComponent,
  };
  //TODO: re think the way of passing the content it is not spoues to be a text
}
