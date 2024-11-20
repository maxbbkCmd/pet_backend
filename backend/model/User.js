//Этот код описывает структуру данных пользователя и позволяет работать с этой информацией в базе данных MongoDB.

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  login: { type: String, required: false },
  adres: { type: String, required: false },
  img: { type: String, required: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;