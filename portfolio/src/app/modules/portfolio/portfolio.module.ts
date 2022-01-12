import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { CardComponent } from './components/card/card.component';
import { PortfolioRouting } from './portfolio-routing.module';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [MainComponent, CardsViewComponent, CardComponent],
  imports: [CommonModule, PortfolioRouting, NgParticlesModule],
})
export class PortfolioModule {}
