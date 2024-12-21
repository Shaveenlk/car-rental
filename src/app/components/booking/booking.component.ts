import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {Booking} from "../../model/booking";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  isSidePanelVisible: boolean = false;
  carList: Car[] = [];
  locakeyName: string = 'rentalCar';
  bookingobj: Booking = new Booking();
  bookingList: Booking[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem(this.locakeyName);
    if (localData != null) {
      this.carList = JSON.parse(localData);
    }

    const localBookingData = localStorage.getItem('rentalBooking');
    if (localBookingData != null){
      this.bookingList = JSON.parse(localBookingData)
    }
  }

  onReset() {
    this.bookingobj = new Booking();
  }

  onSaveBooking() {
    if (this.bookingobj.bookingId == 0){
      const carData = this.carList.find(
        m => m.carId == this.bookingobj.carId
      );
      if (carData != undefined){
        this.bookingobj.carName = carData?.carName;
      }
      this.bookingList.push(this.bookingobj);
      localStorage.setItem('rentalBooking', JSON.stringify(this.bookingList));
    }
  }
}
