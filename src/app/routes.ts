import {provideRouter, RouterConfig} from '@angular/router'

import {FileListComponent} from './file-list'
import {DetailComponent} from './+detail'



export const appRoutes: RouterConfig = 
[
  {path: '', component: FileListComponent}
]

export const APP_ROUTER_PROVIDER = provideRouter(appRoutes);