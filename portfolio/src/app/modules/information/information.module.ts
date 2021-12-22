import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './components/presentation/presentation.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { InformationRouting } from './information-routing.module';

@NgModule({
  declarations: [PresentationComponent, LanguagesComponent],
  imports: [CommonModule, InformationRouting],
})
export class InformationModule {}
