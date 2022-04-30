import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IPostsService } from '../../interfaces/posts-service';
import { Post } from '../../interfaces/post';

// NOTE: Need to implement logic with receiving data from database
@Injectable({
  providedIn: 'root',
})
export class PostsService implements IPostsService {
  getAllPosts(): Observable<Post[]> {
    return of([]);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPostWithId(id: string): Observable<Post | undefined> {
    return of();
  }
}
