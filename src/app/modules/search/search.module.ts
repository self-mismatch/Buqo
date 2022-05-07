import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';
import {
  TuiAvatarModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule,
  TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiLetModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
    TuiAvatarModule,
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
