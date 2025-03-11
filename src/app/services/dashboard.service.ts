import { computed, Injectable, signal } from '@angular/core';
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
      hight: 1,
      width: 3,
      selection: true,
      color: 'lightblue',
      thumbnail:
        "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone_(film)#/media/File:Harry_Potter_and_the_Philosopher's_Stone_banner.jpg",
    },

    {
      id: 1,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
      order: 2,
      hight: 2,
      width: 1,
      selection: true,
      color: 'lightgreen',
      thumbnail:
        'https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg',
    },

    {
      id: 2,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
      order: 2,
      hight: 1,
      width: 1,
      selection: true,
      color: 'lightpink',
      thumbnail:
        'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban_(film)#/media/File:Prisoner_of_azkaban_UK_poster.jpg',
    },

    {
      id: 3,
      name: 'Animal Statistic',
      content: AnimalStatisticComponent,
      order: 2,
      hight: 1,
      width: 2,
      selection: true,
      color: '#DDBDF1',
      thumbnail:
        'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire_(film)#/media/File:Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg',
    },
  ]);

  addedWidgets = signal<Widget[]>([]);

  WidgetNotAdded = computed(() => {
    const addedIds = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => !addedIds.includes(w.id));
  });

  addWidget(w: Widget) {
    //create anther version of the added widgets and not even the same widget that has been added
    this.addedWidgets.set([...this.addedWidgets(), { ...w }]);
  }

  constructor() {}
}
