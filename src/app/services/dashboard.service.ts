import { Injectable, signal } from '@angular/core';
import { Widget } from '../interfaces/widget';
import { UsersComponent } from '../components/users/users.component';
import { AnimalStatisticComponent } from '../components/animal-statistic/animal-statistic.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  widgets = signal<Widget[]>([
    {
      id: 0,
      name: 'Users Statistic',
      content: UsersComponent,
      order: 1,
      hight: 1,
      width: 9,
      selection: true,
      color: 'lightblue',
    },

    {
      id: 1,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
      order: 2,
      hight: 2,
      width: 3,
      selection: true,
      color: 'lightgreen',
    },

    {
      id: 1,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
      order: 2,
      hight: 1,
      width: 3,
      selection: true,
      color: 'lightpink',
    },

    {
      id: 1,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
      order: 2,
      hight: 1,
      width: 6,
      selection: true,
      color: '#DDBDF1',
    },
  ]);
  constructor() {}
}
