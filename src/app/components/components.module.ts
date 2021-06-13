import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { BlueIconComponent } from './blue-icon/blue-icon.component';
import { BlueCardComponent } from './blue-card/blue-card.component';
import { ServicesCard2Component } from './services-card2/services-card2.component';
import { SharedTestComponent } from './shared-test/shared-test.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopbarComponent,
    ServicesCardComponent,
    BlueIconComponent,
    BlueCardComponent,
    ServicesCard2Component,
    SharedTestComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    TopbarComponent,
    ServicesCardComponent,
    BlueCardComponent,
    BlueIconComponent,
    ServicesCard2Component,
    SharedTestComponent,
  ],
})
export class ComponentsModule {}
