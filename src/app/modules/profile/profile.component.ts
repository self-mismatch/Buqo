import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { defer, from, Observable, Subject, take } from 'rxjs';
import { TUI_VALIDATION_ERRORS, TuiFileLike } from '@taiga-ui/kit';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
export class ProfileComponent {
  readonly rejectedFiles$ = new Subject<TuiFileLike | null>();

  form: FormGroup = new FormGroup({
    name: new FormControl(localStorage.getItem('userName') ?? '', [Validators.required]),
    photo: new FormControl(''),
  });

  isLoading = false;

  profilePhotoURL: string = localStorage.getItem('userPhotoURL') ?? '';

  constructor(public fireAuth: AngularFireAuth, private fireStorage: AngularFireStorage) {}

  updateProfile(): void {
    const { name, photo } = this.form.getRawValue();

    this.isLoading = true;

    if (photo) {
      this.uploadPhotoToStorage()
        .pipe(take(1))
        .subscribe((photoURL: string) => {
          this.currentUser.pipe(take(1)).subscribe((user: any) => {
            user
              .updateProfile({
                displayName: name,
                photoURL,
              })
              .then(() => {
                localStorage.setItem('userName', name);
                localStorage.setItem('userPhotoURL', photoURL);
                this.profilePhotoURL = photoURL;
                this.isLoading = false;
              });
          });
        });
    } else {
      this.currentUser.pipe(take(1)).subscribe((user: any) => {
        user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            localStorage.setItem('userName', name);
            this.isLoading = false;
          });
      });
    }
  }

  onReject(file: TuiFileLike | readonly TuiFileLike[]) {
    this.rejectedFiles$.next(file as TuiFileLike);
  }

  removeFile() {
    this.form.get('photo')?.setValue(null);
  }

  clearRejected() {
    this.rejectedFiles$.next(null);
  }

  private get currentUser(): Observable<any> {
    return defer(() => from(this.fireAuth.currentUser));
  }

  private uploadPhotoToStorage(): Observable<string> {
    const photo = this.form.get('photo')?.value;
    const photoPath = 'test-profile-photo';
    const ref = this.fireStorage.ref(photoPath);
    ref.put(photo);

    return ref.getDownloadURL();
  }
}
