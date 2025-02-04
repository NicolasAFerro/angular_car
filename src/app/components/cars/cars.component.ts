import { Component } from '@angular/core';
import{Car} from '../../Car';



@Component({
  selector: 'app-cars',
  standalone: false,

  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  car: Car = {} as Car;
  cars: Car[] = [
    {
      id: 1,
      name: 'Fiesta',
      automaker: 'Ford',
      price: 19000,
      ano: 2011,
    },
    {
      id: 1,
      name: 'Palio',
      automaker: 'Fiat',
      price: 12000,
      ano: 2001,
    },
    {
      id: 1,
      name: 'Etios',
      automaker: 'Toyota',
      price: 40000,
      ano: 2015,
    },
  ];

  updateCar(carro:Car){
    console.log('update:'+ carro.name);
  }
  removeCar(carro:Car){
    console.log('remover: '+carro.name);
  }

}
