import { A0SsrFixupComponent } from '../components/a0-ssr-fixup/a0-ssr-fixup.component';
import { A0SsrComponent } from '../components/a0-ssr/a0-ssr.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: A0SsrComponent, pathMatch: 'full' },
{ path: 'a0-ssr', component: A0SsrComponent, pathMatch: 'full'},
{ path: 'a0-ssr-fixup', component: A0SsrFixupComponent, pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
