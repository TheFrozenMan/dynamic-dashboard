import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardService } from '../../services/dashboard.service';
// import {
//   CdkDrag,
//   CdkDragDrop,
//   CdkDragPreview,
//   CdkDropList,
//   moveItemInArray,
// } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-widget-menu',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    // CdkDrag,
    // CdkDragPreview,
  ],
  templateUrl: './widget-menu.component.html',
  styleUrl: './widget-menu.component.scss',
})
export class WidgetMenuComponent {
  store = inject(DashboardService);

  //FIXME: retrun this to read form WidgetAdded()
  // widgets = this.store.WidgetAdded();

  widgets = this.store.widgets();

  //FIXME: add drag drop to the menu later

  // drop(event: any) {
  //   moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  // }
}
