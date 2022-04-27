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
      name: 'Profile',
      routerLink: '/profile',
    },
  ];
}
