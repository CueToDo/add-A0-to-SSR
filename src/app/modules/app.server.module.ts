import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from '../app.component';

import { AuthClientService } from '../services/auth.client.service';
import { AuthServerService } from '../services/auth.server.service.service';
import { AuthConfigService } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  providers:[
    AuthServerService,
    {
      provide: AuthClientService,
      useClass: AuthServerService,},
      {provide:AuthConfigService,
      useClass:{} as any}
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
