import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <div class="keg-form">
    <h3 class="addKeg">ADD KEG</h3>
      <div class="input-field">
        <input placeholder="Brand" class="col md6 input-lg" #newBrand>
        <input placeholder="Beer Name" class="col md6 input-lg" #newName>
        <input placeholder="Price per Keg" class="col md6 input-lg" #newPrice>
        <input placeholder="ABV" class="col md6 input-lg" #newABV>
        <button (click)="addKeg(newBrand, newName, newPrice, newABV)" class="btn add-button">Add</button>
      </div>
    </div>
  `
})

export class NewKegComponent {
  public keg: Keg;
  public onSubmitNewKeg: EventEmitter<any[]>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newBrand: HTMLInputElement, newName: HTMLInputElement, newPrice: HTMLInputElement, newABV: HTMLInputElement){

      // var newKeg = new Keg(newBrand.value, newName.value, parseInt(newPrice.value), parseFloat(newABV.value));
      var emitArr = [newBrand.value, newName.value, newPrice.value, newABV.value];
      this.onSubmitNewKeg.emit(emitArr);
      newBrand.value = "";
      newName.value = "";
      newPrice.value = "";
      newABV.value = "";
      }
}
