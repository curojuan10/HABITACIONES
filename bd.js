const mongoose = require('mongoose');

// URL de conexión a la base de datos MongoDB
const mongoURL = 'mongodb+srv://juan:root@cluster0.wf0zpqp.mongodb.net/habitaciones';
// Configuración de la conexión
const options = {
 
};

// Conectarse a la base de datos
mongoose.connect(mongoURL, options)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Puedes colocar aquí el resto de tu código que dependa de la conexión a la base de datos
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
