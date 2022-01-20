import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-add-student></app-add-student>
  <app-edit-student>/<app-edit-student>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'kolokwium-angular';
}
