import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
  <h4>Edit Keg</h4>
  <br>
  <h5>Edit Brand: </h5>
  <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form"/>
  <h5>Edit Beer Name: </h5>
  <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>
  <h5>Edit Keg Price: </h5>
  <input [(ngModel)]="keg.kegPrice" class="col-sm-8 input-lg keg-form"/>
  <h5>Edit Keg ABV: </h5>
  <input [(ngModel)]="keg.alcoholContent" class="col-sm-8 input-lg keg-form"/>
  <h5>Edit Pint Number: </h5>
  <input [(ngModel)]="keg.pintsLeft" class="col-sm-8 input-lg keg-form"/>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
