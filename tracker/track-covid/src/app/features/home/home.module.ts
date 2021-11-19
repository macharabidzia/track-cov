import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, MatGridListModule],
  providers: [],
})
export class HomeModule {}
