import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{

  carObj: Car = new Car();
  carList: Car[] = [];
  locakeyName: string = 'rentalCar';
  isSidePanelVisible: boolean = false;

  onSaveCar() {
    if (this.carObj.carId == 0){
      this.carObj.carId = this.carList.length + 1 ;
      this.carList.push(this.carObj);
      localStorage.setItem(this.locakeyName,JSON.stringify(this.carList));
      this.onReset();
    }
  }

  onReset(){
    this.carObj = new Car();
  }

  ngOnInit(): void {
    const localData = localStorage.getItem(this.locakeyName);
    if (localData != null) {
      this.carList = JSON.parse(localData);
    }
  }
}
