import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {DangerComponent} from './danger/danger.component';
import {WarningComponent} from './warning/warning.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';
import {AboutModule} from './about/about.module';
import {DashboardModule} from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    DangerComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DemoMaterialModule,
    AboutModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
