import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string): void {
    // Send the log message to the terminal using console.log (for development)
    console.log(message);

    // Optionally, implement further logic to send logs to a server or local file
  }
}
