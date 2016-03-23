import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.components';
import { NewKegComponent } from './new-keg.component';
import { PintSaleComponent } from './pint-sale.component';
import { LowPipe } from './low-pipe';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <keg-display *ngFor="#currentKeg of kegList | low:filterLow" (click)="kegClicked(currentKeg)" [class.selected]="currentKeg === selectedKeg" [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show low pint kegs</option>
    <option value="out">Show empty kegs</option>
  </select>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  // console.log(kegList);
  public filterLow: string = "notLow";
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    // console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(emitArr): void {
    this.kegList.push(
      new Keg(emitArr[0], emitArr[1], emitArr[2], emitArr[3], this.kegList.length)
    );
  }
}
