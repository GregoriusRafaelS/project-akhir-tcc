const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.DB_USER);


const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 4000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
