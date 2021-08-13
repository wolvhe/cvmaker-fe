import { PinfoComponent } from './pinfo/pinfo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { TesttqueryComponent } from './testtquery/testtquery.component';
import { TemplateComponent } from './template/template.component';
import { AckulandComponent } from './template/ackuland/ackuland.component';
import { BerkeleyComponent } from './template/berkeley/berkeley.component';
import { EdinburghComponent } from './template/edinburgh/edinburgh.component';
import { OtagoComponent } from './template/otago/otago.component';
import { PrincetonComponent } from './template/princeton/princeton.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'info', component: PinfoComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'test', component: TesttqueryComponent},
  {path: 'template', component: TemplateComponent},
  {path: 'akuland', component: AckulandComponent},
  {path: 'berkeley', component: BerkeleyComponent},
  {path: 'edinburgh', component: EdinburghComponent},
  {path: 'otago', component: OtagoComponent},
  {path: 'princeton', component: PrincetonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PinfoComponent]