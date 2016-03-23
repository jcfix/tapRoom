export class Keg {
  public tapped: boolean = false;
  public pintsLeft: number = 124;
  constructor(public brand: string, public name: string, public kegPrice: number, public alcoholContent: number, public id: number) {
  }
}
