import { routingRoutes } from './16-routing/routes';
import { Routes } from '@angular/router';
import { resolverRoutes } from './8-resolver/routes';

export const routes: Routes = [
  // ...resolverRoutes,
  ...routingRoutes,
];
