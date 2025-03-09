import { WidgetComponent } from './../../components/widget/widget.component';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardService } from '../../services/dashboard.service';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { WidgetMenuComponent } from '../widget-menu/widget-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-admin',
  imports: [
    CommonModule,
    SharedModule,
    WidgetComponent,
    MatGridListModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    WidgetMenuComponent,
  ],
  templateUrl: './dashboard-admin.component.html',
  providers: [DashboardService],
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent {
  store = inject(DashboardService);
  dataExist: boolean = true;
  widths: number[] = Array.from({ length: 4 }, (_, i) => i + 1);
  heights: number[] = Array.from({ length: 4 }, (_, i) => i + 1);
  dragEnabled = signal(false); // Initially disabled

  toggleDrag() {
    this.dragEnabled.update((value) => !value);
  }

  drop(event: CdkDragDrop<any[]>) {
    if (!this.dragEnabled()) return;

    this.store.widgets.update((widgets) => {
      moveItemInArray(widgets, event.previousIndex, event.currentIndex);

      const updatedWidgets = widgets.map((widget, index) => ({
        ...widget,
        order: index + 1,
      }));

      return updatedWidgets;
    });
  }

  //TODO: re think the way of passing the content it is not spoues to be a text
}
