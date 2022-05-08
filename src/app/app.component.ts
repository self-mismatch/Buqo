import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthorized$: Observable<any> = this.fireAuth.authState;

  title = 'Buqo';

  constructor(private readonly fireAuth: AngularFireAuth) {}
}
