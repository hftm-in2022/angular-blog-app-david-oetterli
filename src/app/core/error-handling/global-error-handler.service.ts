import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: never): void {
    console.error('HTTP Error:', error);

    // Optional: Fehler an einen Logging-Service senden
    // const loggingService = this.injector.get(LoggingService);
    // loggingService.log(error);

    // Optional: User Feedback (Toast oder Dialog)
    alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
  }
}
