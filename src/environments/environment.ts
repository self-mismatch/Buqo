// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { PostsService } from '../app/core/services/posts/posts.service';
import { PostsMockService } from '../mocks/services/posts/posts.mock.service';

export const environment = {
  firebase: {
    projectId: 'buqo-c95d0',
    appId: '1:934896127530:web:f3f9cbcf43812ccc507d53',
    storageBucket: 'buqo-c95d0.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyCZNtDFb5ahZwmwsb_D86ETWsYk053R_NY',
    authDomain: 'buqo-c95d0.firebaseapp.com',
    messagingSenderId: '934896127530',
    measurementId: 'G-LT3T44KY5J',
  },
  production: false,
  providers: [
    {
      provide: PostsService,
      useClass: PostsMockService,
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
