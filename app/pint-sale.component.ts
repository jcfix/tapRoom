import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-sale'
  template: `
  <form class="saleForm">
  <button (click)="subtractPint()" class="btn btn-danger add-button">Sale</button>
  </form>
  `
})


export class PintSaleComponent {

}
