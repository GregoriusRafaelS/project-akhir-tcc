// // auth/models/User.js
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// userSchema.pre('save', async function(next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });

// userSchema.methods.comparePassword = function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// module.exports = mongoose.model('User', userSchema);

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;


