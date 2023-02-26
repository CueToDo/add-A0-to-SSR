import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from '../app.component';

import { AuthConfigService, AuthService } from '@auth0/auth0-angular';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [
    {
      provide: AuthService,
      useValue: {},
    },
    { provide: AuthConfigService, useValue: {} as any },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
