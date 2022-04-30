import { Observable } from 'rxjs';

import { Post } from './post';

export interface IPostsService {
  getAllPosts(): Observable<Post[]>;

  getPostWithId(id: string): Observable<Post | undefined>;
}
