import { WidgetComponent } from './../../components/widget/widget.component';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Widget } from '../../interfaces/widget';
import { DashboardService } from '../../services/dashboard.service';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard-admin',
  imports: [
    CommonModule,
    SharedModule,
    WidgetComponent,
    MatGridListModule,
    DragDropModule,
  ],
  templateUrl: './dashboard-admin.component.html',
  providers: [DashboardService],
  styleUrl: './dashboard-admin.component.scss',
})
export class DashboardAdminComponent {
  store = inject(DashboardService);
  dataExist: boolean = true;

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
