import { Component, OnInit, NgZone, ChangeDetectorRef } from "@angular/core";
import { CustomService } from "./services/custom.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-sse-client";
  response = [];
  constructor(private _customService: CustomService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this._customService
      .callSseApi("http://localhost:8080/v1/sse/stream-sse")
      .subscribe(data => {
        console.log(data.data);

        this.response.push(data.data);
      });
  }
}
