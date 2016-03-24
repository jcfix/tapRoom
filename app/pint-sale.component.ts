import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-sale',
  inputs: ['keg'],
  template: `
    <button (click)="subtractPint(keg)" class="btn sale-button">Sale</button>
  `
})


export class PintSaleComponent {
  public keg: Keg;
  subtractPint(keg: Keg): void {
    if (keg.pintsLeft >= 1) {
    keg.pintsLeft--;
    }
  }
}
