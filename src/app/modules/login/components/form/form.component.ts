import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'Please fill out this field',
      },
    },
  ],
})
export class FormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLoading = false;

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    // TODO: Need to create home page and activate redirect after login
    // const { email, password } = this.form.getRawValue();
    //
    // this.auth.signInWithEmailAndPassword(email, password).then(() => {
    //   this.isLoading = false;
    //   // this.router.navigateByUrl('/home');
    // });
  }
}
