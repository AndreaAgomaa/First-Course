export class Car {
  static className = "Carro";

  public doors: number;
  public readonly brand: string;
  public fuelThank: number;
  public isRunning: boolean;
  public type: string;

  private readonly createdAt: number;

  constructor(brand: string, type: string) {
    this.doors = 4;
    this.brand = brand;
    this.fuelThank = 90;
    this.isRunning = false;
    this.type = type;

    this.createdAt = 12121212;
  }

  turnOn() {
    if (this.isRunning) {
      console.log("El carro ya estaba encendido, se acaba de malograr");
      return;
    }

    if (this.fuelThank === 0) {
      console.log("El carro no tiene gasolina para encenderse");
      return;
    }

    this.isRunning = true;
    console.log("El carro esta encendido");
  }

  fillThank(gas: number) {
    if (gas <= 0) {
      console.log("Cantidad de gasolina no valido");
      return;
    }

    //let newFuelThank = this.fuelThank + gas;
    //if (newFuelThank > 100) {
    //  this.fuelThank = 100;
    //} else {
    //  this.fuelThank = newFuelThank;
    //}
    //let newFuelThank = this.fuelThank + gas;
    //if (newFuelThank > 100) {
    //  newFuelThank = 100;
    //}
    //this.fuelThank = newFuelThank;

    this.fuelThank = this.fuelThank + gas;

    if (this.fuelThank > 100) {
      this.fuelThank = 100;
      console.log("No sobre llenar");
    }
  }
}

let toyota = new Car("Toyota", "Mecanico");
//toyota.brand = "Hourse";
//toyota.type = "Mazda";
//console.log(toyota.createdAt); / private
console.log(toyota);
toyota.fillThank(5);
toyota.turnOn();
console.log(toyota);
console.log(Car.className);
