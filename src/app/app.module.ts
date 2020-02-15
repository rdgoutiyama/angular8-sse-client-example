import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomService } from "./services/custom.service";
import { SseService } from "./services/sse.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CustomService, SseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
