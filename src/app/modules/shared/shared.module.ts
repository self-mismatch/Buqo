import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';

import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  declarations: [TruncatePipe],
  imports: [CommonModule, TuiButtonModule],
  exports: [TuiButtonModule, TruncatePipe],
})
export class SharedModule {}
