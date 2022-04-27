import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiFieldErrorModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [RegistrationComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiFieldErrorModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiLinkModule,
    RouterModule,
  ],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
