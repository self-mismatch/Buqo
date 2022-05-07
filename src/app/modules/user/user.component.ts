import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, take } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user$: Observable<any> = new Observable<any>();

  constructor(
    private readonly firestore: AngularFirestore,
    private readonly location: Location,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      const { id } = params;

      this.user$ = this.firestore
        .collection('users')
        .get()
        .pipe(
          take(1),
          map(
            collection =>
              collection.docs.map(doc => doc.data()).filter(user => (user as any).id === id)[0]
          )
        );
    });
  }

  goBack(): void {
    this.location.back();
  }
}
