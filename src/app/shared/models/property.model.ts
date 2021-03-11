export class Property {
  public id: number;
  public title: string;
  public address: string;
  public price: number;
  public size: number;
  public imagePath: string;
  public room: number;

  constructor(title: string, address: string, price: number, size: number, imagePath: string) {
    this.title = title;
    this.address = address;
    this.price = price;
    this.size = size;
    this.imagePath = imagePath;
  }
}
