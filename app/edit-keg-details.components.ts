import { Component } from 'angular2/core';
import { Keg } from './keg.model';


@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="keg-form">
  <h4>Edit Keg Brand: </h4>
  <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form"/>
  <h4>Edit Keg Name: </h4>
  <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>
  <h4>Edit Keg Keg Price: </h4>
  <input [(ngModel)]="keg.kegPrice" class="col-sm-8 input-lg keg-form"/>
  <h4>Edit Keg Alcohol Content: </h4>
  <input [(ngModel)]="keg.alcoholContent" class="col-sm-8 input-lg keg-form"/>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
