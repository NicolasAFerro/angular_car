import { Component } from '@angular/core';
import{Car} from '../../Car';



@Component({
  selector: 'app-cars',
  standalone: false,

  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  newCar: Car = {} as Car;
  isUpdate: boolean = false;
  idCount: number=4;
  cars: Car[] = [
    {
      id: 1,
      name: 'Fiesta',
      automaker: 'Ford',
      price: 19000,
      year: 2011,
    },
    {
      id: 2,
      name: 'Palio',
      automaker: 'Fiat',
      price: 12000,
      year: 2001,
    },
    {
      id: 3,
      name: 'Etios',
      automaker: 'Toyota',
      price: 40000,
      year: 2015,
    },
  ];


  updateCar(carro:Car){
    this.newCar=carro;
    this.isUpdate = true;
    console.log("new car: "+this.newCar.name);
    console.log('update:'+ carro.name);

  }
  removeCar(carro:Car){
    this.cars = this.cars.filter((b) => b !== carro);
    console.log('remover: '+carro.name);
  }
  saveCar(){
    if(!this.isUpdate){
      this.newCar.id = this.idCount;
      this.idCount++;
      this.cars.push(this.newCar);
    }
    this.newCar = {} as Car; //zera a variavel
    this.isUpdate = false;
   console.log('to aqui');
  }

}
