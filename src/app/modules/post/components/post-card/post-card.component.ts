import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Post } from '../../../../core/interfaces/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  @Input() post!: Post;
}
