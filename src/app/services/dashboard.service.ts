import { Injectable, signal } from '@angular/core';
import { Widget } from '../interfaces/widget';
import { UsersComponent } from '../components/users/users.component';
import { AnimalStatisticComponent } from '../components/animal-statistic/animal-statistic.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 0,
      name: 'Users Statistic',
      content: UsersComponent,
      order: 1,
      hight: 2,
      width: 2,
      selection: true,
    },

    {
      id: 1,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
      order: 2,
      hight: 2,
      width: 2,
      selection: true,
    },
  ]);
  constructor() {}
}
