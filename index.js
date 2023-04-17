class ProductManager {
  id = 1;

  constructor() {
    this.products = [];
  }

  addProduct(product) {
    let checkCode = this.products.find((p) => p.code === product.code);
    if (checkCode) {
      return 'This code already exists';
    }
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      return 'Fields missing';
    }
    let newProduct = { ...product, id: this.id };
    this.products.push(newProduct);
    this.id++;
    return 'Product added';
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let found = this.products.find((p) => p.id === id);
    if (!found) {
      return 'Not found';
    }
    return found;
  }
}

const product = {
    title: 'auricular',
    description: 'auricular inalambrico',
    price: 900,
    thumbnail: 'https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/g/7/g733kda---foto-1.jpg',
    code : 'abc456',
    stock : 100,  
}


const productManager = new ProductManager();