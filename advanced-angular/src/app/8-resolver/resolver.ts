import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { DataService } from './data.service';
import { Data } from './data.interface';

export const dataResolver: ResolveFn<Data> = (
  route: ActivatedRouteSnapshot,
) => {
  return inject(DataService).getData(+route.paramMap.get('id')!);
};
