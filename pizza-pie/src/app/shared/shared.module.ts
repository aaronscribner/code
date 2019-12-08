import { NgModule } from '@angular/core';
import { NavListItemComponent } from './components/nav-list-item.component';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    MatListModule
  ],
  declarations: [
    NavListItemComponent
  ],
  exports: [
    NavListItemComponent
  ]
})
export class SharedModule {
}
