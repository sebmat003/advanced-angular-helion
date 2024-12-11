import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RoutingComponent } from './routing.component';

export const routingRoutes = [
  {
    path: '',
    loadComponent: () => RoutingComponent,
    children: [
      {
        path: 'a',
        component: AComponent,
      },
      {
        path: 'b',
        component: BComponent,
      },
    ],
  },
];
