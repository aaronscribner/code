import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpendituresRoutingModule } from './expenditures-routing.module';
import { ExpendituresComponent } from './expenditures.component';

@NgModule({
  declarations: [
    ExpendituresComponent
  ],
  imports: [
    CommonModule,
    ExpendituresRoutingModule
  ]
})
export class ExpendituresModule { }
