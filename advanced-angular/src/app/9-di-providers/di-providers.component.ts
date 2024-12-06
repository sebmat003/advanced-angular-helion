import { Component, inject, OnInit } from '@angular/core';
import {
  BetterLogger,
  Logger,
  loggerObject,
  LoggerService,
  loggerServiceFactory,
  MyNewLogger,
  NotificationService,
} from './classes';

@Component({
  selector: 'app-di-providers',
  template: '',
  providers: [
    MyNewLogger,
    { provide: BetterLogger, useExisting: MyNewLogger },
    NotificationService,
    // { provide: Logger, useClass: BetterLogger },
    // { provide: Logger, useExisting: MyNewLogger },
    // { provide: Logger, useValue: loggerObject },
    {
      provide: LoggerService,
      useFactory: loggerServiceFactory,
      deps: [BetterLogger, NotificationService],
    },
  ],
})
export class DiProvidersComponent implements OnInit {
  loggerService = inject(LoggerService);

  ngOnInit(): void {
    this.loggerService.display();
  }
}
