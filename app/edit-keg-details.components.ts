import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
  <h3 class="editKeg">EDIT KEG</h3>
  <br>
  <h6>Brand: </h6>
  <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form"/>
  <h6>Beer Name: </h6>
  <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>
  <h6>Keg Price: </h6>
  <input [(ngModel)]="keg.kegPrice" type="number" class="col-sm-8 input-lg keg-form"/>
  <h6>Keg ABV: </h6>
  <input [(ngModel)]="keg.alcoholContent" type="number" class="col-sm-8 input-lg keg-form"/>
  <h6>Pint Number: </h6>
  <input [(ngModel)]="keg.pintsLeft" type="number" class="col-sm-8 input-lg keg-form"/>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
