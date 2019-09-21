import { Component } from '@angular/core';

import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
<mat-tab-group>
  <ng-container *ngIf="title$ | async as title">
    <mat-tab label="Title">{{ title }}</mat-tab>
  </ng-container>
</mat-tab-group>
  `,
  styles: []
})
export class AppComponent {
  title$ = of('Hello');
}
