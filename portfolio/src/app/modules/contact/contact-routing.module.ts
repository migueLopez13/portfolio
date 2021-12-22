import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFormComponent } from './components/page-form/page-form.component';

const routes: Routes = [
  { path: 'main', component: PageFormComponent },
  { path: '', component: PageFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRouting {}
