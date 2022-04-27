import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiFieldErrorModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';

import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent, FormComponent],
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
  exports: [LoginComponent],
})
export class LoginModule {}
