import { Injectable } from "@angular/core";
import {
  IVehicleProvider,
  VehicleSize,
  VehicleSummary,
  VehicleType,
  VehicleCost
} from "../interfaces/ivehicle.provider";

@Injectable()
export class HardcodedVehicleService implements IVehicleProvider {
  GetVehicle(): VehicleSummary {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1: {
        return {
          type: VehicleType.car,
          category: VehicleSize.small,
          cost: VehicleCost.car
        };
      }
      case 2: {
        return {
          type: VehicleType.van,
          category: VehicleSize.small,
          cost: VehicleCost.van
        };
      }
      case 3: {
        return {
          type: VehicleType.truck,
          category: VehicleSize.large,
          cost: VehicleCost.truck
        };
      }
      default: {
        return {
          type: VehicleType.bus,
          category: VehicleSize.large,
          cost: VehicleCost.bus
        };
      }
    }
  }
}
