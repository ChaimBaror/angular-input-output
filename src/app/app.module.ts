import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './comps/parent/parent.component';
import { ChlidComponent } from './comps/chlid/chlid.component';
import { ChlidFnComponent } from './comps/chlid-fn/chlid-fn.component';
import { ParentFnComponent } from './comps/parent-fn/parent-fn.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChlidComponent,
    ChlidFnComponent,
    ParentFnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
