import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './comps/parent/parent.component';
import { ChlidComponent } from './comps/chlid/chlid.component';
import { ChlidFnComponent } from './comps/chlid-fn/chlid-fn.component';
import { ParentFnComponent } from './comps/parent-fn/parent-fn.component';
import { JItmeComponent } from './comps/OI-FM/j-itme/j-itme.component';
import { JPageComponent } from './comps/OI-FM/j-page/j-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChlidComponent,
    ChlidFnComponent,
    ParentFnComponent,
    JItmeComponent,
    JPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
