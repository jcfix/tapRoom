import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { PintSaleComponent } from './pint-sale.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [PintSaleComponent],
  template: `
  <br>
  <h5>{{ keg.brand }}, <span class="kegName">{{keg.name}}</span></h5>
  <h6>ABV: {{ keg.alcoholContent }}% | Pints Remaining: {{keg.pintsLeft}}</h6>
   <pint-sale [keg]="keg"></pint-sale>
  `
})

export class KegComponent {
  public keg: Keg;


}
