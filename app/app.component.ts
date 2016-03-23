import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  // directives: [TaskListComponent],
  template: `
  <div class="container">
    <h1>Test App!</h1>
    <h3 *ngFor="#keg of kegs">{{ keg.brand }} | {{ keg.name}}</h3>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg('Russian River', 'Pliny the Elder', 150, 5.7, 0),
      new Keg('Buoy Beer Co', 'Helles Lager', 100, 4.5, 1),
      new Keg('Hop Valley', 'Double-D Blonde', 85, 5, 2),
      new Keg('Pfriem', 'Saison Farmhouse Ale', 95, 6.2, 3),
      new Keg('Breakside', 'Breakside Stout', 130, 6.7, 4)
    ];
  }

}

export class Keg {
  public tapped: boolean = false;
  constructor(public brand: string, public name: string, public kegPrice: number, public alcoholContent: number, public id: number) {
  }
}
