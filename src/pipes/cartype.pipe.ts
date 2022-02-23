import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "caretype",
  pure: true
})
export class CarType implements PipeTransform {
  transform(value: unknown, ...args: unknown[]) {
    switch (value) {
      case 0:
        return "Car";
      case 1:
        return "Van";
      case 2:
        return "Truck";
      case 3:
        return "Bus";
      default:
        return "Car";
    }
  }
}
