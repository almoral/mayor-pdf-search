import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PdfsService } from './app/pdfs.service'
import {HTTP_PROVIDERS} from '@angular/http'
import { MayorPdfSearchAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(MayorPdfSearchAppComponent, [HTTP_PROVIDERS, PdfsService]);
