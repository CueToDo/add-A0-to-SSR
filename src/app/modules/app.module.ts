import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../app.component';
import { LoginButtonComponent } from '../components/login-button/login-button.component';
import { LogoutButtonComponent } from '../components/logout-button/logout-button.component';
import { A0SsrFixupComponent } from '../components/a0-ssr-fixup/a0-ssr-fixup.component';
import { A0SsrComponent } from '../components/a0-ssr/a0-ssr.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    A0SsrFixupComponent,
    A0SsrComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }
