import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FerryTerminalComponent } from "./ferryterminal/ferry.terminal.component";
import { AppComponent } from "./app.component";
import { HardcodedVehicleService } from "../services/hardcoded.vehicle.service";
import { VEHICLE_PROVIDER } from "src/interfaces/ivehicle.provider";

import { SmallFerryComponent } from "./smallferry/small.ferry.component";
import { LargeFerryComponent } from "./largeferry/large.ferry.component";

@NgModule({
  declarations: [
    AppComponent,
    FerryTerminalComponent,
    SmallFerryComponent,
    LargeFerryComponent
  ],
  imports: [BrowserModule],
  providers: [{ provide: VEHICLE_PROVIDER, useClass: HardcodedVehicleService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
