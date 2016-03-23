export class Keg {
  public tapped: boolean = false;
  public pintsLeft: number = 124;
  public brand: string;
  public name: string;
  public kegPrice: number;
  public alcoholContent: number;
  constructor(public kegArr: any[]) {
    this.brand = kegArr[0];
    this.name = kegArr[1];
    this.kegPrice = kegArr[2];
    this.alcoholContent = kegArr[3];
  }
}
