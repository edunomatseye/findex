import { Component, Inject, OnInit } from "@angular/core";
import {
  IVehicleProvider,
  VehicleSummary,
  VEHICLE_PROVIDER
} from "src/interfaces/ivehicle.provider";
import { CostingService } from "../../services/costing.service";

@Component({
  selector: "ferry-terminal",
  templateUrl: "./ferry.terminal.component.html",
  styleUrls: ["./ferry.terminal.component.css"]
})
export class FerryTerminalComponent implements OnInit {
  currentVehicle: VehicleSummary;
  smallFerry: VehicleSummary[] = [];
  largeFerry: VehicleSummary[] = [];
  ferry: VehicleSummary[] = [];

  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider,
    private costingService: CostingService
  ) {}

  get totalCost() {
    return this.costingService.totalCost(this.ferry);
  }

  ngOnInit() {
    //this.smallFerry.length = 8;
    //this.largeFerry.length = 6;
  }

  public getVehicle() {
    this.currentVehicle = this.vehicleProvider.GetVehicle();

    if (this.currentVehicle.category === 0 && this.smallFerry.length <= 7) {
      this.smallFerry.push(this.currentVehicle);
      this.ferry.push(this.currentVehicle);
      console.log(this.smallFerry);
    } else if (
      this.currentVehicle.category === 1 &&
      this.largeFerry.length <= 5
    ) {
      this.largeFerry.push(this.currentVehicle);
      this.ferry.push(this.currentVehicle);
      console.log(this.largeFerry);
    }
  }
}
