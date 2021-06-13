import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    SidebarModule,
    ButtonModule,
    CarouselModule,
    RadioButtonModule,
    ProgressBarModule,
    CascadeSelectModule,
    DropdownModule,
    CalendarModule
  ],
})
export class PrimengModule {}
