import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PageFormComponent } from './components/page-form/page-form.component';
import { ContactRouting } from './contact-routing.module';

@NgModule({
  declarations: [ContactFormComponent, PageFormComponent],
  imports: [CommonModule, ContactRouting],
})
export class ContactModule {}
