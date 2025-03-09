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
    },
  ]);

  addedWidgets = signal<Widget[]>([]);

  WidgetAdded = computed(() => {
    const addedId = this.addedWidgets().map((w) => w.id);
    return this.widgets().filter((w) => {
      !addedId.includes(w.id);
    });
  });

  constructor() {}
}

// import { Injectable, signal } from '@angular/core';
// import { Widget } from '../../interfaces/widget';
// import { UsersComponent } from '../compoent/users/users.component';
// import { ChartComponent } from '../compoent/chart/chart.component';
// import { InformationComponent } from '../compoent/information/information.component';

// @Injectable({
//   providedIn: 'root',
// })
// export class DashboardService {
//   dragEnabled = signal(true); // Control drag & drop activation

//   EnableEdit = signal(true);
//   widgets = signal<Widget[]>([

//             // {text: 'One', cols: 9, rows: 1, color: 'lightblue'},

//     {
//       id: 0,
//       name: 'Users Statistic',
//       content: UsersComponent,
//       order: 1,
//       height: 1 ,
//       width: 3,
//       selected :false,
//       color: 'lightblue'
//     },

//   // {text: 'Two', cols: 3, rows: 3, color: 'lightgreen'},

//     {
//       id: 1,
//       name: 'Animal Statistic',
//       content: ChartComponent,
//       order: 2,
//       height: 2,
//       width: 1,
//       selected :false,
//       color: 'lightgreen'
//     },

//       // {text: 'Three', cols: 3, rows: 1, color: 'lightpink'},

//     {
//       id: 2,
//       name: 'information',
//       content: InformationComponent,
//       order: 3,
//       height: 1,
//       width: 1,
//       selected :false,
//        color: 'lightpink'

//     },

//   // {text: 'Four', cols: 6, rows: 1, color: '#DDBDF1'},

//     {
//       id: 3,
//       name: 'information',
//       content: InformationComponent,
//       order: 4,
//       height: 1,
//       width: 2,
//       selected :false,
//        color:'#DDBDF1'

//     },
//   ]);

//   unUsedWidgets = signal<Widget[]>([])

//   updateWidgets(newOrder: any[]) {
//     this.widgets.set(newOrder); // Updates the signal state
//   }

//   removeWidgetByIndex(index: number) {
//     this.widgets.update(widgets => widgets.filter((_, i) => i !== index));
//   }

//   constructor() {}

// }
