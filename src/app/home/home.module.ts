import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  providers: [],
  exports: [HeaderComponent]
})
export class HomeModule { }
