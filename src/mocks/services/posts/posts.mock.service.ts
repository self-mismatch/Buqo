import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from '../../../app/core/interfaces/post';
import { IPostsService } from '../../../app/core/interfaces/posts-service';

import { postMocks } from './posts';

@Injectable({
  providedIn: 'root',
})
export class PostsMockService implements IPostsService {
  private posts = postMocks.slice();

  getAllPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostWithId(id: string): Observable<Post | undefined> {
    return of(this.posts.find(post => post.id === id));
  }
}
