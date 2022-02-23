import { Component, Input } from "@angular/core";
import { VehicleSummary } from "src/interfaces/ivehicle.provider";
import { CostingService } from "../../services/costing.service";

@Component({
  selector: "large-ferry",
  templateUrl: "./large.ferry.component.html",
  styleUrls: ["./large.ferry.component.css"]
})
export class LargeFerryComponent {
  @Input() ferry: VehicleSummary[];

  constructor(private costingService: CostingService) {}

  get totalCost() {
    return this.costingService.totalCost(this.ferry);
  }
}
