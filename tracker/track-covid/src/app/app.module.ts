import { LayoutsModule } from './layouts/layouts.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule.forRoot(), LayoutsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
