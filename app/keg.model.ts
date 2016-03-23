export class Keg {
  public tapped: boolean = false;
  constructor(public brand: string, public name: string, public kegPrice: number, public alcoholContent: number, public id: number) {
  }
}
