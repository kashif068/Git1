class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  

    calculateTotalValue() {
      return this.products.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    }
  

    logInventoryAfterDelay() {
      setTimeout(() => {
        console.log(`Total inventory value: $${this.calculateTotalValue()}`);
      }, 3000);
    }
  }
  

  const inventory = new Inventory();
  
  const product1 = new Product('Laptop', 1000, 5);
  const product2 = new Product('charger', 300, 10);
  
  inventory.addProduct(product1);
  inventory.addProduct(product2);
  
  inventory.logInventoryAfterDelay(); 
  





























































// class Product {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }
// }

// class Inventory {
//     // arr = [1, 2, 3, 4 ,5]
//     constructor(){
//         this.products = [];
//     }
//     addProduct(product){
//         this.products.push(product);
//     }
//     calculateTotalValue (){
//         let total = 0;
//          this.products.reduce((acc,cuur) => {
//              total +=this.products.price * this.products.quantity;
//         })
//         return total;
//     }

//     logInventoryAfterDelay(){
//         setTimeout(() => {
//             console.log(`Total inventry value : $ ${this.calculateTotalValue()}`);            
//         },30 );
//     }
// }

// const inventory = new Inventory();

// const product1 = new Product("laptop", 1000, 5);
// // const product2 = new Product("charger", 5000, 10);

// inventory.addProduct(product1);
// // inventory.addProduct(product2);

// inventory.logInventoryAfterDelay();