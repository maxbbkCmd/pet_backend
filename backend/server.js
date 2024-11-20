require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Подключение CORS это механизм, который позволяет или запрещает веб-страницам делать запросы к ресурсам (например, API) на другом домене (с другого сайта).
const User = require("./model/User"); // Подключение модели User

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Роут для добавления пользователя
app.post("/api/user", async (req, res) => {
  try {
    const { name, login, adres, img } = req.body;
    const newUser = new User({ name, login, adres, img });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});
