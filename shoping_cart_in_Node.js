const inventory = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    quantity: 10,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 400,
    quantity: 20,
  },
  {
    id: 3,
    name: "Headphones",
    price: 50,
    quantity: 50,
  },
  {
    id: 4,
    name: "Tablet",
    price: 300,
    quantity: 15,
  },
  {
    id: 5,
    name: "Desktop PC",
    price: 1200,
    quantity: 8,
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 350,
    quantity: 12,
  },
  {
    id: 7,
    name: "Wireless Mouse",
    price: 25,
    quantity: 30,
  },
  {
    id: 8,
    name: "External Hard Drive",
    price: 100,
    quantity: 25,
  },
  {
    id: 9,
    name: "Gaming Console",
    price: 450,
    quantity: 10,
  },
  {
    id: 10,
    name: "Smartwatch",
    price: 150,
    quantity: 18,
  },
  {
    id: 11,
    name: "Printer",
    price: 150,
    quantity: 10,
  },
  {
    id: 12,
    name: "Portable Speaker",
    price: 80,
    quantity: 25,
  },
  {
    id: 13,
    name: "Monitor",
    price: 250,
    quantity: 15,
  },
  {
    id: 14,
    name: "Wireless Keyboard",
    price: 40,
    quantity: 20,
  },
  {
    id: 15,
    name: "eBook Reader",
    price: 100,
    quantity: 10,
  },
];
// shoping cart
let shopingCart = [];
//(This code is used for find,add,remove and update object or product in [inventory])
// ******Find an object by ID in inventory******
function findProductById(id) {
  return inventory.find((product) => product.id === id);
}
const foundProduct = findProductById(3);
console.log(foundProduct);

// ******Add a new product in inventory******
function addProduct(product) {
  inventory.push(product);
}
addProduct({ id: 16, name: "Power Bank", price: 50, quantity: 30 });
console.log(inventory);

// ******Remove a product by ID in inventory******
function removeProductById(id) {
  const productIndex = inventory.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    inventory.splice(productIndex, 1);
  }
}
removeProductById(2);
//  console.log(inventory);

// ******Update an existing product in inventory******
function updateProduct(product) {
  const productIndex = inventory.findIndex((p) => p.id === product.id);
  if (productIndex !== -1) {
    inventory[productIndex] = product;
  }
}
updateProduct({ id: 5, name: "Gaming PC", price: 1500, quantity: 5 });
// console.log(inventory);

// ___________________________________________________________________________________
//(This code is used for find,add,remove and update object or product in [ShopingCart])
let totalPrice = 0;
// *********Function to add a product to the shopping cart*********
function addProductToCart(productId, quantity) {
  //Check if the product exists in the inventory
  const product = inventory.find((item) => item.id === productId);
  if (!product) {
    return;
  }
  // Check if the product quantity is sufficient
  if (quantity > product.quantity) {
    return;
  }
  // Add the product to the shopping cart
  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
    total_Price: product.price * quantity,
  };
  shopingCart.push(cartItem);
  // Update the product quantity in the inventory
  product.quantity -= quantity;
  // Calculate the total price
  totalPrice += cartItem.price * cartItem.quantity;
}
// add product in shoping cart
addProductToCart(1, 5);
addProductToCart(2, 5);
console.log(shopingCart);
console.log(inventory);

//  *******using function checkout process generates an order summary******
function checkout() {
  console.log("Order summary:");
  // Display each item in the shopping cart
  for (const item of shopingCart) {
    console.log(`- ${item.name} purchased:  ${item.quantity}`);
  }
  console.log(`Total price: ${totalPrice}`);
}
checkout();

// *******Clear the shopping cart after checkout*****
function clearShoppingCart() {
  shopingCart = [];
  totalPrice = 0;
  console.log("Shopping cart cleared[]");
}
clearShoppingCart();
