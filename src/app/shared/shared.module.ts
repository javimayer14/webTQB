import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { FooterSeccionComponent } from './footer-seccion/footer-seccion.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, FooterSeccionComponent],
  imports: [CommonModule, PrimengModule,RouterModule],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
