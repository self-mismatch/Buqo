import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Camera, Home, Settings, User } from 'angular-feather/icons';

const icons = {
  Camera,
  Home,
  Settings,
  User,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
