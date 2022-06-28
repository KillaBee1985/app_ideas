import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-appbar></app-appbar>
    <div>
    Content:
    <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'console';
}
