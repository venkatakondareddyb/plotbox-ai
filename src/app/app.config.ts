import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { postCodeAiRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(postCodeAiRoutes), provideClientHydration(), provideAnimationsAsync(), provideHttpClient(withFetch()), {
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true,
      disableImageLazyLoadWarning: true
    }
  },]
};
