import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestInversorComponent } from './pages/test-inversor/test-inversor.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { CommandmentsComponent } from './pages/commandments/commandments.component';
import { WikiBridgeComponent } from './pages/wiki-bridge/wiki-bridge.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { FooterSeccionComponent } from './shared/footer-seccion/footer-seccion.component';
import { FlixAndFlipComponent } from './pages/flix-and-flip/flix-and-flip.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'testInversor',
    component: TestInversorComponent,
  },
  {
    path: 'Sanmartin630',
    //component: ProjectDetailComponent, canActivate:[AuthGuard]
    component: ProjectDetailComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'commandments',
    component: CommandmentsComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'wiki',
    component: WikiBridgeComponent,
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent,
  },
  {
    path: 'prueba',
    component: FooterSeccionComponent,
  },
  {
    path: 'proyecto-fix&flip',
    component: FlixAndFlipComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
