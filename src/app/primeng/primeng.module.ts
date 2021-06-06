import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {RadioButtonModule} from 'primeng/radiobutton';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [SidebarModule,ButtonModule,CarouselModule,RadioButtonModule],
})
export class PrimengModule {}
