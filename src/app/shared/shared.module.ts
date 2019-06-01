import { NgModule } from '@angular/core';
import { YesNoBooleanPipe } from './pipes/yes-no-boolean.pipe';
import { HumanizePipe } from './pipes/humanize.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [],
  declarations: [
    YesNoBooleanPipe,
    HumanizePipe
  ],
  providers: [DatePipe],
  exports: [
    YesNoBooleanPipe,
    HumanizePipe
  ]
})
export class SharedModule {
}
