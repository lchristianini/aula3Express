const express = require('express');
const products = require('./api');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const newProducts = req.body;
    newProducts.forEach((product) => products.push(product));
    return res.status(201).json(products);
})

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;
    products.forEach((product, i) => {
        if (product.id === Number(id)) (
            products.splice(i, 1, newProduct)
        );
    });
    return res.status(200).json(products);
})

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    products.forEach((product, i) => {
        if (product.id === Number(id)) (
            products.splice(i, 1)
        );
    });
    return res.status(200).json(products);
})

app.get('/', (_req, res) => {
    return res.status(201).json(products);
})

app.listen(3001, () =>
    console.log('Escutando porta 3001')
)
