function Product(n, p) {
  this.name = n;
  this.price = p;
    // return this;
    // return { name: "saksham", age: 22 };
}

let p1 = new Product("iphone", 10000);
let p2 = Product("iphone1", 20);
console.log(p1);
console.log(p2);
