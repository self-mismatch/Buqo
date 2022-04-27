import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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

  constructor(private auth: AngularFireAuth, private router: Router) {}

  submit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const { email, name, password } = this.form.getRawValue();

    this.auth.createUserWithEmailAndPassword(email, password).then(response => {
      response.user
        ?.updateProfile({
          displayName: name,
        })
        .then(() => {
          localStorage.setItem('userName', name);
          this.isLoading = false;
          this.router.navigateByUrl('/home');
        });
    });
  }
}
