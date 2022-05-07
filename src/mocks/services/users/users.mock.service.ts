import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, take } from 'rxjs';

import { IUsersService } from '../../../app/core/interfaces/users-service';

import { mockUsers } from './index';

@Injectable({
  providedIn: 'root',
})
export class UsersMockService implements IUsersService {
  private readonly users: any[] = mockUsers.slice();

  constructor(private readonly firestore: AngularFirestore) {}

  findUsersByName(name: string): Observable<any> {
    return this.firestore
      .collection('users')
      .get()
      .pipe(
        take(1),
        map(collection => collection.docs.map(doc => doc.data())),
        map(users => users.filter(user => (user as any).name.includes(name)))
      );
  }
}
