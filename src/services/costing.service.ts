import { Injectable } from "@angular/core";
import { VehicleSummary } from "../interfaces/ivehicle.provider";

Injectable({
  providedIn: "root"
});
export class CostingService {
  totalCost(ferry: VehicleSummary[]) {
    return ferry.reduce((acc, item) => {
      return acc + item.cost;
    }, 0);
  }
}
