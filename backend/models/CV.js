// models/CV.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('/User');

const CV = sequelize.define('CV', {
  datosPersonales: DataTypes.JSON,
  educacion: DataTypes.JSON,
  experiencia: DataTypes.JSON,
  habilidades: DataTypes.JSON,
  plantillaSeleccionada: DataTypes.STRING,
  temaSeleccionado: DataTypes.STRING,
  // Otros campos
});

// Establecer relación con User
CV.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(CV, { foreignKey: 'userId' });

module.exports = CV;
