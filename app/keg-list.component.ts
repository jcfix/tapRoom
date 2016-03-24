import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.components';
import { NewKegComponent } from './new-keg.component';
import { PintSaleComponent } from './pint-sale.component';
import { LowPipe } from './low-pipe';
import { EmptyPipe } from './empty-pipe';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe, EmptyPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter form-control">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show low pint kegs</option>
    <option value="empty">Show empty pint kegs</option>
  </select>
  <keg-display *ngFor="#keg of kegList | low:filterLow | empty:filterEmpty"  (click)="kegClicked(keg)" [class.selected]="keg === selectedKeg" [keg]="keg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)">
  </new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  // console.log(kegList);
  public filterLow: string = "all";
  public filterEmpty: string = "all";
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
      new Keg([emitArr[0], emitArr[1], emitArr[2], emitArr[3]])
    );
  }
  onChange(filterOption) {
   this.filterLow = filterOption;
   this.filterEmpty = filterOption;
 }

}
