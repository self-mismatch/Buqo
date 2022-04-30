import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiIslandModule } from '@taiga-ui/kit';

import { PostComponent } from './post.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostComponent, PostCardComponent],
  imports: [CommonModule, SharedModule, TuiIslandModule],
  exports: [PostCardComponent],
})
export class PostModule {}
