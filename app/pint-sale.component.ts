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
  public onSubmitPintSale: EventEmitter<Keg>;
  constructor(){
    this.onSubmitPintSale = new EventEmitter();
  }
  subtractPint(keg: Keg): void {
    // console.log(keg.pintsLeft,'test');
    this.selectedBtn = pintSale;
    this.onBtnSelect.emit(pintSale);
  }
}
