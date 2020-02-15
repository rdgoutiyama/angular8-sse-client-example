import { NgZone, Injectable } from "@angular/core";
import { SseService } from "./sse.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomService {
  constructor(private _zone: NgZone, private _sseService: SseService) {}

  callSseApi(url: string): Observable<any> {
    return Observable.create(observer => {
      const eventSource = this._sseService.getEventSource(url);

      eventSource.addEventListener("periodic-event", event => {
        this._zone.run(() => {
          observer.next(event);
        });
      });

      eventSource.onerror = event => {
        this._zone.run(() => {
          observer.error(event);
        });
      };
    });
  }
}
