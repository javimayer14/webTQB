import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TestInversorComponent } from './pages/test-inversor/test-inversor.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { CommandmentsComponent } from './pages/commandments/commandments.component';
import { WikiBridgeComponent } from './pages/wiki-bridge/wiki-bridge.component';
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
    path: 'projectDetail',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
