const  express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const products = require('./products');

app.use(express.json());
app.use(cors());
app.get('/api/products',(req, res)=>{
    try{
        res.status(200).json({message: "products fetched successfully", data: products});
    }catch(e){
        res.status(500).json({message: "Internal Server error", error: e.message});
    }
});

app.listen(PORT,()=>{
    console.log(`Server running on port number ${PORT}`);
});