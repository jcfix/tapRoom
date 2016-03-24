import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h3>Tap List</h3>
    <keg-list [kegList]="kegs" (onKegSelect)="kegWasSelected($event)"></keg-list>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg(['Russian River', 'Pliny the Elder', 150, 5.7]),
      new Keg(['Buoy Beer Co', 'Helles Lager', 100, 4.5]),
      new Keg(['Hop Valley', 'Double-D Blonde', 85, 5]),
      new Keg(['Pfriem', 'Saison Farmhouse Ale', 95, 6.2]),
      new Keg(['Breakside', 'Breakside Stout', 130, 6.7])
    ];
  }

  kegWasSelected(clickedKeg: Keg): void {
  }
}
