import { StatesService } from './services/states.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ApiService } from './services/api.service';
@NgModule({
  imports: [HttpClientModule, BrowserAnimationsModule],
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ApiService, StatesService],
    };
  }
}
