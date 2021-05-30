import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/sections/hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { QuienesSomosComponent } from './home/sections/quienes-somos/quienes-somos.component';
import { MiembrosComponent } from './home/sections/miembros/miembros.component';
import { ProyectosEvaluadosComponent } from './home/sections/proyectos-evaluados/proyectos-evaluados.component';
import { ContactComponent } from './home/sections/contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PresentarProyectoComponent } from './home/sections/presentar-proyecto/presentar-proyecto.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    QuienesSomosComponent,
    MiembrosComponent,
    ProyectosEvaluadosComponent,
    ContactComponent,
    PresentarProyectoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [HomeComponent],
})
export class PagesModule {}
