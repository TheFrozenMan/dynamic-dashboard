import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardAdminComponent } from './admin/dashboard/dashboard-admin.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },

  { path: 'dashboard', component: DashboardAdminComponent },

  { path: '**', component: PageNotFoundComponent },
];

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(appRoutes, withDebugTracing())]
// }
