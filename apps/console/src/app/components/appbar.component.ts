import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbarModule],
  selector: 'app-appbar',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>AppIdeas</mat-toolbar-row>
    </mat-toolbar>
  `
})
export class AppbarComponent { }