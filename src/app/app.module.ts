import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinfoComponent } from './pinfo/pinfo.component';
import { ExperienceComponent } from './experience/experience.component';
import { TesttqueryComponent } from './testtquery/testtquery.component';
import { QuillModule } from 'ngx-quill';
import { TemplateComponent } from './template/template.component';
import { AckulandComponent } from './template/ackuland/ackuland.component';
import { EdinburghComponent } from './template/edinburgh/edinburgh.component';
import { PrincetonComponent } from './template/princeton/princeton.component';
import { OtagoComponent } from './template/otago/otago.component';
import { BerkeleyComponent } from './template/berkeley/berkeley.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    PinfoComponent,
    ExperienceComponent,
    TesttqueryComponent,
    TemplateComponent,
    AckulandComponent,
    EdinburghComponent,
    PrincetonComponent,
    OtagoComponent,
    BerkeleyComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
