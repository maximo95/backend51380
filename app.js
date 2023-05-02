import express from 'express';
import ProductManager from './productManager.js'
const productManager = new ProductManager();

const app = express ();
const port = 8080;

app.use (express.json());
app.use (express.urlencode({extendes: true}));

app.get ('/products', async (req,res)=> {
    try{
    const limit = req.query.limit;
    const products = await container.getProduct();
    if (limit){
        res.json(products.slice(0,limit));
    }else {
        res.json(products);
    }
    }catch (error){
        res.json({message: 'Hubo un error'})
    }
});

app.get('/product/:id',async (req,res)=> {
    try{
    const {id} = req.params;
const product = await productManager.getProductbyId(ParseInt(id));
if (product){
    res.json(product);
}else {
    res.json({error:'Product not found'});
}
}catch (error){
    res.status(500).json({message:'hubo un error'})
}
})


app.listen(Port, ()=> {
    console.log(`Listening on port : ${PORT}`)
})