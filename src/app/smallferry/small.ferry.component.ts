import { Component, Input } from "@angular/core";
import { VehicleSummary } from "src/interfaces/ivehicle.provider";
import { CostingService } from "../../services/costing.service";

@Component({
  selector: "small-ferry",
  templateUrl: "./small.ferry.component.html",
  styleUrls: ["./small.ferry.component.css"]
})
export class SmallFerryComponent {
  @Input() ferry: VehicleSummary[];

  constructor(private costingService: CostingService) {}

  get totalCost() {
    return this.costingService.totalCost(this.ferry);
  }
}
