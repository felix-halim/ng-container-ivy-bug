# mat-tab inside ng-container failed to display when ivy is enabled

Steps to reproduce:

$ ng --version
...
Angular CLI: 8.3.5
Node: 10.16.3
OS: darwin x64
Angular: 8.2.7
...


$ ng new ng-container-ivy-bug --enable-ivy --minimal
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS

$ cd ng-container-ivy-bug

$ npm install --save @angular/material @angular/cdk @angular/animations
+ @angular/cdk@8.2.0
+ @angular/material@8.2.0
+ @angular/animations@8.2.7

Edit app.module.ts add BrowserAnimationsModule and MatTabsModule

Edit app.component.ts:

<mat-tab-group>
  <ng-container *ngIf="title$ | async as title">
    <mat-tab label="Title">{{ title }}</mat-tab>
  </ng-container>
</mat-tab-group>


$ ng serve

Observe blank page at: http://localhost:4200/


Edit the tsconfig.app.json and disable ivy:

    "enableIvy": false

Kill and restart the server:

$ ng serve

Observe something is displayed at: http://localhost:4200/
