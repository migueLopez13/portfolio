import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'cards', component: CardsViewComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRouting {}
