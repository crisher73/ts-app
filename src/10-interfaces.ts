type Sizes = 'S'| 'M'|'L'|'XL' // type son mas cortas y puntuales 
/* type Product = {
    id: string |number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
} */

// interface se utilizan para un conjunto de atributos de valores

interface Product  {
    id: string |number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
}
const products : Product[] = [];

products.push({
    id: '1',
    title: 'p1',
    createdAt: new Date(),
    stock: 12,
});

const addProduct = (data: Product) => {
    products.push(data);
}


    