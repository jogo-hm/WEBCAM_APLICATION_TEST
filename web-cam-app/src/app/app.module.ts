import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//External modules
import {WebcamModule} from 'ngx-webcam';

//Angular material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

//New components 
import { CamComponent } from './cam/cam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    CamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
