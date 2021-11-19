import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule,
  ],
  exports: [NavbarComponent],
  providers: [],
})
export class LayoutsModule {}
