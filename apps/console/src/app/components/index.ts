import { NgModule } from '@angular/core'

import { AppbarComponent } from './appbar.component'

const components = [AppbarComponent]

@NgModule({
  imports: components,
  exports: components
})
export class ApplicationComponentsModule { }
