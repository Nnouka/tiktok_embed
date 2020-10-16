import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiktokComponent } from './components/tiktok/tiktok.component';
import { InstagramComponent } from './components/instagram/instagram.component';

@NgModule({
  declarations: [
    AppComponent,
    TiktokComponent,
    InstagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
