import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreenLayoutComponent } from './full-screen-layout/full-screen-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { ScrollPanelModule } from 'primeng/primeng';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent, LayoutSubMenuComponent } from './default-layout/menu/menu.component';
import { TopBarComponent } from './default-layout/top-bar/top-bar.component';
import { FooterComponent } from './default-layout/footer/footer.component';

@NgModule({
  declarations: [
    FullScreenLayoutComponent,
    DefaultLayoutComponent,
    MenuComponent,
    MenuComponent,
    LayoutSubMenuComponent,
    TopBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ScrollPanelModule,
    SharedModule,
    LayoutRoutingModule,

  ],
  providers: [
  ]
})
export class LayoutModule {
}
