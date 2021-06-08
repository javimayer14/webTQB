import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    SidebarModule,
    ButtonModule,
    CarouselModule,
    RadioButtonModule,
    ProgressBarModule,
  ],
})
export class PrimengModule {}
