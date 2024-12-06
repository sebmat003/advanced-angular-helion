export class Logger {
  protected value = 'Log 1';

  log() {
    console.log(this.value);
  }
}

export class BetterLogger extends Logger {
  setValue(value: string) {
    this.value = value;
  }
}

export class MyNewLogger {
  protected value!: string;

  log() {
    console.log(this.value);
  }

  setValue(value: string) {
    this.value = value;
  }
}

export const loggerObject = {
  value: 'Log 1',
  log: function () {
    console.log(this.value);
  },
};

export class LoggerService {
  constructor(
    private logger: BetterLogger,
    private value: string,
  ) {}

  display() {
    this.logger.setValue(this.value);
    this.logger.log();
  }
}

export const loggerServiceFactory = (
  logger: BetterLogger,
  notificationService: NotificationService,
) => new LoggerService(logger, notificationService.lastError);

export class NotificationService {
  lastError = 'Error';
}
