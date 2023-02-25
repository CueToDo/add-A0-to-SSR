import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppClientModule } from './app/modules/app.client.module';


platformBrowserDynamic().bootstrapModule(AppClientModule)
  .catch(err => console.error(err));
