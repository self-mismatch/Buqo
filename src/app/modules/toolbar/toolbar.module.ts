import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownControllerModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiDropdownControllerModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    RouterModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
