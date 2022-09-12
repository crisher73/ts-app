import { addProduct } from './products/product.service';

addProduct({
    id: '1',
    title: 'p1',
    createdAt: new Date(),
    stock: 12,
    category: {
        id:'123',
        name:'c1',
    }
});