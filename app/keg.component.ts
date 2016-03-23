import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { PintSaleComponent } from './pint-sale.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [PintSaleComponent],
  template: `
  <h3>{{ keg.brand }} | {{keg.name}} | {{keg.pintsLeft}}</h3>
   <pint-sale [keg]="keg"></pint-sale>
  `
})

export class KegComponent {
  public keg: Keg;


}
