class Product {
  // data member
  discount = 10;
  constructor(n, p) {
    // data member
    this.name = n;
    this.price = p;
  }

  // member function
  displayProduct() {
    // we can access data member inside 
    // member function using "this" keyword only.
    console.log(this.name, this.price,this.discount);
  }
  buyProduct() {}
}

let iphone = new Product("iphone_14", 52344);
let macbook = new Product("mac", 3434);

iphone.displayProduct();
macbook.displayProduct();
