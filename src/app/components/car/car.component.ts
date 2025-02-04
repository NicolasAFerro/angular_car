import { Component, Input, Output } from '@angular/core';
import { Car } from '../../Car';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: false,

  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {

  @Input()
  carroFilho: Car = {} as Car;

  @Output()
  saveEmitter= new EventEmitter();

  save(){
    this.saveEmitter.emit();
  }

}
