import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<appHeader></appHeader><router-outlet></router-outlet>',

})
export class AppComponent {
  title = 'app';
}
