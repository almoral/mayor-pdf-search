import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MayorPdfSearchAppComponent, environment } from './app/'
import {APP_ROUTER_PROVIDER} from './app/routes'

if (environment.production) {
  enableProdMode();
}

bootstrap(MayorPdfSearchAppComponent, [ APP_ROUTER_PROVIDER ]);
