const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./db'); 
const Driver = require('./models/Driver'); 
const Vehicle = require('./models/Vehicle'); 
const Supplier = require('./models/Supplier');
const Product = require('./models/Product'); 
const WeighingProcess = require('./models/WeighingProcess'); 
const { getAllDrivers, createDriver, updateDriver, deleteDriver } = require('./controller/driverController');
const { getAllProduct, createProduct, updateProduct, deleteProduct } = require('./controller/productController');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// Rotalar
app.get('/drivers', getAllDrivers);
app.post('/drivers', createDriver);
app.put('/drivers/:id', updateDriver);
app.delete('/drivers/:id', deleteDriver);

app.get('/products', getAllProduct);
app.post('/products', createProduct);
app.put('/products/:id', updateProduct);
app.delete('/products/:id', deleteProduct);

// Sequelize ile tabloları oluşturduk
sequelize.sync({ force: true }).then(() => {
    console.log("Veritabanı tabloları başarıyla senkronize edildi!");
}).catch((err) => {
    console.error("Tablo oluşturulurken hata:", err);
});

// Örnek API
app.get('/', (req, res) => {
    res.send('Kantar Uygulaması Çalışıyor!');
});

//API istekleri için endpointler
// const wpRoutes = require('./routes/wpRoutes');
// app.use('/api/process', wpRoutes);
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);
const supplierRoutes = require('./routes/supplierRoutes');
app.use('/api/suppliers', supplierRoutes);
const driverRoutes = require('./routes/driverRoutes');
app.use('/api/drivers', driverRoutes);
const vehicleRoutes = require('./routes/vehicleRoutes');

app.use('/api/vehicles', vehicleRoutes);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});