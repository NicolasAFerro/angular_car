import { Component } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-car',
  standalone: false,

  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  carro: Car = {} as Car;
}
