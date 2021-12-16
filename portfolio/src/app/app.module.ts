import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { CvComponent } from './modules/portfolio/components/cv/cv.component';
import { NavComponent } from './modules/portfolio/components/nav/nav.component';
import { PersonalInformationComponent } from './modules/portfolio/pages/personal-information/personal-information.component';
import { PortfolioComponent } from './modules/portfolio/pages/portfolio/portfolio.component';
import { LanguagesComponent } from './modules/portfolio/pages/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvComponent,
    NavComponent,
    PersonalInformationComponent,
    PortfolioComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
