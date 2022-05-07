import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, Observable, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { TuiDestroyService, TuiStringHandler } from '@taiga-ui/cdk';

import { UsersService } from '../../core/services/users/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TuiDestroyService],
})
export class SearchComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  readonly search$: Subject<string | null> = new Subject();

  readonly items$: Observable<readonly any[] | null> = this.search$.pipe(
    filter(value => value !== null),
    switchMap(search => this.serverRequest(search).pipe(startWith<readonly any[] | null>(null))),
    startWith([])
  );

  readonly stringify: TuiStringHandler<any> = (item: { name: string }) => item.name;

  constructor(
    private readonly destroy$: TuiDestroyService,
    private readonly router: Router,
    private readonly usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.form
      .get('name')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(value => {
        if (value) {
          this.router.navigate(['/user'], { queryParams: { id: this.form.get('name')?.value.id } });
        }
      });
  }

  onSearchChange(searchQuery: string | null) {
    this.search$.next(searchQuery);
  }

  extractValueFromEvent(event: Event): string | null {
    return (event.target as HTMLInputElement)?.value || null;
  }

  private serverRequest(searchQuery: string | null): Observable<readonly any[]> {
    return this.usersService.findUsersByName(searchQuery as string);
  }
}
