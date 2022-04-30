import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';

import { Post } from '../../core/interfaces/post';
import { PostsService } from '../../core/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {
  post$!: Observable<Post | undefined>;

  constructor(
    private location: Location,
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params: any) => {
      this.post$ = this.postsService.getPostWithId(params.id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
