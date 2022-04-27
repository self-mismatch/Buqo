import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
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
export class RegistrationComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isLoading = false;

  constructor(private auth: AngularFireAuth, private router: Router) {}

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const { email, password } = this.form.getRawValue();

    this.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.isLoading = false;
      this.router.navigateByUrl('/home');
    });
  }
}
