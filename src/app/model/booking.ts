export class Booking{
  bookingId:number;
  customerName: string;
  mobileNo: string;
  carId: number;
  carName: string;
  bookingDate: Date;
  rentType: string;
  rentDuration: number;
  noofCars: number;

  constructor() {
    this.bookingId = 0;
    this.carId = 0;
    this.carName = "";
    this.bookingDate = new Date();
    this.carId = 0;
    this.rentType = "";
    this.rentDuration = 0;
    this.noofCars = 0;
    this.customerName = "";
    this.mobileNo = "";
  }
}
