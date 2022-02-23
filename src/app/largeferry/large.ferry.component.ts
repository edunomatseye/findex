import { Component, Input } from "@angular/core";
import { VehicleSummary } from "src/interfaces/ivehicle.provider";

@Component({
  selector: "large-ferry",
  templateUrl: "./large.ferry.component.html",
  styleUrls: ["./large.ferry.component.css"]
})
export class LargeFerryComponent {
  @Input() ferry: VehicleSummary[];
}
