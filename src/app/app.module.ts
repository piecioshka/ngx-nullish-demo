import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxNullishModule } from 'ngx-nullish';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNullishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
