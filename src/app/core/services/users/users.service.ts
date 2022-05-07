import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUsersService } from '../../interfaces/users-service';

// NOTE: Need to implement logic with receiving data from database
@Injectable({
  providedIn: 'root',
})
export class UsersService implements IUsersService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findUsersByName(name: string): Observable<any> {
    return of([]);
  }
}
