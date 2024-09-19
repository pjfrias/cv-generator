require('dotenv').config();
const express = require('express'); 
const cors = require('cors'); const app = express(); //
//Middlewares 
app.use(cors()); 
app.use(express.json()); // Rutas // Aquí importarás tus rutas const userRoutes =
require('./routes/userRoutes'); 
const paymentRoutes = require('./routes/paymentRoutes'); 
app.use('/api/users', userRoutes);
app.use('/api/payment', paymentRoutes); // Puerto const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Servidor corriendo en el puerto ${PORT}`); });

const sequelize = require('./config/database');

// Importar modelos
const User = require('./models/User');
const CV = require('./models/CV');

// Sincronizar modelos
sequelize.sync().then(() => {
  console.log('Modelos sincronizados con la base de datos');
}).catch((error) => {
  console.error('Error al sincronizar los modelos:', error);
});
