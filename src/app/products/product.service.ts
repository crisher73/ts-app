import {Product} from './product.model';

export const products : Product[] = [];

export const addProduct = (data: Product) => {
    products.push(data);
}

export const updateProduct = (id: string, changes:Product) => {
    const index: number = getIndex(id)
    const product: Product = products[index]
   index === -1 && throwError('Product not Found')
  
    products[index] = {
      ...product,
      ...changes
    }
    return products[index]
}

const getIndex = (id: string) => products.findIndex(product => product.id === id)
const throwError = (error: string) => new Error(error)

export const findProduct = (id:string) => {
    const index: number = getIndex(id)
    index === -1 && throwError('Product not Found')
    return products[index]
  }

