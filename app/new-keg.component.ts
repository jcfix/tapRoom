import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
    <h3>Create Keg: </h3>
      <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
      <input placeholder="Alcohol" class="col-sm-8 input-lg" #newABV>
      <button (click)="addKeg(newBrand, newName, newPrice, newABV)" class="btn btn-info btn-lg add-button">Add</button>
    </div>
  `
})

export class NewKegComponent {
  public keg: Keg;
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newBrand: HTMLInputElement, newName: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement){

      var newKeg = new Keg(newBrand.value, newName.value, parseInt(newPrice.value), parseFloat(newABV.value), 0);

      var emitArr = [newBrand.value, newName.value, parseInt(newPrice.value), parseFloat(newABV.value)];
      this.onSubmitNewKeg.emit(emitArr);
      newBrand.value = "";
      newName.value = "";
      newPrice.value = "";
      newABV.value = "";
      }
}
