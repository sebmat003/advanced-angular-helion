import { Injectable } from '@angular/core';
import { Data } from './data.interface';
import { delay, Observable, of } from 'rxjs';

const MOCKED_DATA = (id: number): Data => ({
  id,
  title: 'My data',
  elements: [
    {
      isAvailable: true,
      value: 'First',
    },
    {
      isAvailable: true,
      value: 'Second',
    },
    {
      isAvailable: false,
      value: 'Other',
    },
  ],
});

@Injectable()
export class DataService {
  getData(id: number): Observable<Data> {
    return of(MOCKED_DATA(id)).pipe(delay(2000));
  }
}
