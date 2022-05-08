import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { HomeComponent } from './modules/home/home.component';
import { LoginModule } from './modules/login/login.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { HomeModule } from './modules/home/home.module';
import { ToolbarModule } from './modules/toolbar/toolbar.module';
import { ProfileModule } from './modules/profile/profile.module';
import { PostModule } from './modules/post/post.module';
import { SearchModule } from './modules/search/search.module';
import { UserModule } from './modules/user/user.module';
import { BottomBarModule } from './modules/bottom-bar/bottom-bar.module';
import { IconsModule } from './modules/icons/icons.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    IconsModule,
    LoginModule,
    RegistrationModule,
    ToolbarModule,
    BottomBarModule,
    HomeModule,
    ProfileModule,
    PostModule,
    SearchModule,
    UserModule,
  ],
  providers: [
    {
      provide: FIREBASE_OPTIONS,
      useValue: environment.firebase,
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
    ...environment.providers,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
