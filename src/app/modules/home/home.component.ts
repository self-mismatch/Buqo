import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Post } from '../../core/interfaces/post';
import { PostsService } from '../../core/services/posts/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  posts: Observable<Post[]> = this.postsService.getAllPosts();

  constructor(private postsService: PostsService, private router: Router) {}

  openPost(post: Post): void {
    this.router.navigate(['/post'], {
      queryParams: {
        id: post.id,
      },
    });
  }
}
