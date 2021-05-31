import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [CommonModule, PrimengModule],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
