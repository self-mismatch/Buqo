import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TuiFieldErrorModule,
  TuiFilesModule,
  TuiInputFilesModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiInputModule,
    TuiFieldErrorModule,
    TuiInputPasswordModule,
    TuiInputFilesModule,
    ReactiveFormsModule,
    TuiFilesModule,
  ],
})
export class ProfileModule {}
