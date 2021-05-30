import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NavbarComponent } from './shared/navbar/navbar.component';
//import { HeroComponent } from './components/hero/hero.component';
//import { ServicesCardComponent } from './components/services-card/services-card.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CountsComponent } from './pages/counts/counts.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
//import { TopbarComponent } from './components/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlModule } from 'ngx-owl-carousel';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TeamComponent } from './pages/team/team.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FaqComponent } from './pages/faq/faq.component';
//import { ContactComponent } from './pages/contact/contact.component';
//import { FooterComponent } from './shared/footer/footer.component';
//import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { MiembrosComponent } from './pages/miembros/miembros.component';
//import { ProyectosEvaluadosComponent } from './pages/proyectos-evaluados/proyectos-evaluados.component';
//import { PresentarProyectoComponent } from './pages/presentar-proyecto/presentar-proyecto.component';
//import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    //NavbarComponent,
    //HeroComponent,
    //ServicesCardComponent,
    AboutComponent,
    SkillsComponent,
    CountsComponent,
    ClientsComponent,
    ServicesComponent,
    TestimonialsComponent,
    //TopbarComponent,
    PortfolioComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    //ContactComponent,
    //FooterComponent,
    //QuienesSomosComponent,
    //MiembrosComponent,
    //ProyectosEvaluadosComponent,
    //PresentarProyectoComponent,
    //HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    OwlModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    PagesModule,
    ComponentsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
