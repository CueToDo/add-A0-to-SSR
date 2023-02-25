import { Component } from '@angular/core';
import { AuthClientService } from './services/auth.client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a0-with-ssr';

  constructor(public auth: AuthClientService){}
  
}
