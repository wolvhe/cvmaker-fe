import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinfoComponent } from './pinfo/pinfo.component';
import { ExperienceComponent } from './experience/experience.component';
import { TesttqueryComponent } from './testtquery/testtquery.component';
import { QuillModule } from 'ngx-quill';
import { TemplateComponent } from './template/template.component';
@NgModule({
  declarations: [
    AppComponent,
    PinfoComponent,
    ExperienceComponent,
    TesttqueryComponent,
    TemplateComponent
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
