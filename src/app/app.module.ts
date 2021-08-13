import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinfoComponent } from './pinfo/pinfo.component';
import { ExperienceComponent } from './experience/experience.component';
import { TesttqueryComponent } from './testtquery/testtquery.component';
import { QuillModule } from 'ngx-quill';
@NgModule({
  declarations: [
    AppComponent,
    PinfoComponent,
    ExperienceComponent,
    TesttqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
