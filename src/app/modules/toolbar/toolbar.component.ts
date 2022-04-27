import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  readonly items = [
    {
      name: 'Home',
      routerLink: '/home',
    },
    {
      name: 'Profile',
      routerLink: '/profile',
    },
  ];

  open = false;

  menuItemClick(): void {
    this.open = false;
  }
}
