import { Observable } from 'rxjs';

export interface IUsersService {
  findUsersByName(name: string): Observable<any>;
}
