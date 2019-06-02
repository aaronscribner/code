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
    path: 'dashboard',
    component: DefaultLayoutComponent,
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
