import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServerListComponent } from './server-list/server-list.component';
import { SeversAndAppsService } from './severs-and-apps.service';
import { ApplicationComponent } from './application/application.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [SeversAndAppsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
