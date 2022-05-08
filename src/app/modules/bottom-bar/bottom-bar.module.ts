import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BottomBarComponent } from './bottom-bar.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [BottomBarComponent],
  imports: [CommonModule, RouterModule, IconsModule],
  exports: [BottomBarComponent],
})
export class BottomBarModule {}
