import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FullScreenLayoutComponent } from './layout/full-screen-layout/full-screen-layout.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: FullScreenLayoutComponent,
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'register',
    component: FullScreenLayoutComponent,
    loadChildren: './registration/registration.module#RegistrationModule',
  },
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'training',
    component: DefaultLayoutComponent,
    loadChildren: './expenditures/expenditures.module#ExpendituresModule',
  },
  {
    path: 'schedule',
    component: DefaultLayoutComponent,
    loadChildren: './schedules/schedules.module#SchedulesModule',
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
