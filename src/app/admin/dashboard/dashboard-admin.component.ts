import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, SharedModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent {
  dataExist: boolean = false;
}
