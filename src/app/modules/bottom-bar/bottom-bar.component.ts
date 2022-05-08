import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomBarComponent {
  constructor(private readonly router: Router) {}

  open(route: string): void {
    this.router.navigate([route]);
  }
}
