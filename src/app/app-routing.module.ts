import { PinfoComponent } from './pinfo/pinfo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { TesttqueryComponent } from './testtquery/testtquery.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path: 'info', component: PinfoComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'test', component: TesttqueryComponent},
  {path: 'template', component: TemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PinfoComponent]