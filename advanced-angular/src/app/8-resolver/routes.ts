import { DataService } from './data.service';
import { dataResolver } from './resolver';
import { ResolverUsageComponent } from './resolver-usage.component';

export const resolverRoutes = [
  {
    path: ':id',
    component: ResolverUsageComponent,
    resolve: {
      data: dataResolver,
    },
    providers: [DataService],
  },
];
