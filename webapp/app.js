const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./db'); 
const Supplier = require('./models/Supplier');
const Product = require('./models/Product'); 
const WeighingProcess = require('./models/WeighingProcess'); 


const {updateSupplier, getAllSupplier, createSupplier} = require('./controller/supplierController');

const { getAllProcess, createProcess,updateProcess} = require('./controller/processController');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT =process.env.PORT || 4000;




app.get('/suppliers', getAllSupplier);
app.post('/suppliers', createSupplier);
app.put('/suppliers/:id',updateSupplier);


app.get('/process', getAllProcess);
app.post('/process', createProcess);
app.put('/process/:id',updateProcess);



sequelize.sync({ force: true }).then(() => {
    console.log("Veritabanı tabloları başarıyla senkronize edildi!");
}).catch((err) => {
    console.error("Tablo oluşturulurken hata:", err);
});

app.get('/', (req, res) => {
    res.send('Kantar Uygulaması Çalışıyor!');
});

 const wpRoutes = require('./routes/wpRoutes');
 app.use('/api/process', wpRoutes);
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
const supplierRoutes = require('./routes/supplierRoutes');
app.use('/api/suppliers', supplierRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});