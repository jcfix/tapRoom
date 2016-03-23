import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-sale',
  inputs: ['keg'],
  template: `
    <button (click)="subtractPint(keg)" class="btn btn-danger add-button">Sale</button>
  `
})


export class PintSaleComponent {
  public keg: Keg;
  public usedKegs: Keg[];
  subtractPint(keg: Keg, usedKegs: Keg[]): void {
    keg.pintsLeft--;

    // if (keg.pintsLeft <= 10) {
    //       // console.log(keg);
    //   this.usedKegs.push(keg);
    }
    // console.log(this.usedKegs);
  }
}
