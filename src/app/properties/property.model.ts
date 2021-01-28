export class Property {
  public name: string;
  public address: string;
  public price: number;
  public imagePath: string;

  constructor(name: string, address: string, price: number, imagePath: string) {
    this.name = name;
    this.address = address;
    this.price = price;
    this.imagePath = imagePath;
  }
}
