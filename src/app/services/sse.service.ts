import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SseService {
  getEventSource(url: string): EventSource {
    // debbuging how sse works.
    console.log('url', url);
    return new EventSource(url);
  }
}
