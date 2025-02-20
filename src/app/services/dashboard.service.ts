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
    },

    {
      id: 1,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
    },
  ]);
  constructor() {}
}
