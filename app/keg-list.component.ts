import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.components';
import { NewKegComponent } from './new-keg.component';
import { PintSaleComponent } from './pint-sale.component';

@Component({
  selector: 'keg-list'
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent, PintSaleComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg"><pint-sale></pint-sale>
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  console.log(kegList);
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('click', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(emitArr): void {
    this.kegList.push(
      new Keg(emitArr[0], emitArr[1], emitArr[2], emitArr[3], this.kegList.length)
    );
  }
  // subtractPint(saleClick: Keg): void {
  //   this.onSaleClick = saleClick;
  //   this.on
  // }
}
