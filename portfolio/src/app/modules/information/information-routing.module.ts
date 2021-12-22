import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagesComponent } from './components/languages/languages.component';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: '', component: PresentationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationRouting {}
