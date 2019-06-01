import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../default-layout.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent {

  constructor(public app: DefaultLayoutComponent) {
  }
}
