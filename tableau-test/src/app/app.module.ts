import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableauEmbedModule } from 'tableau-embed';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableauEmbedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
