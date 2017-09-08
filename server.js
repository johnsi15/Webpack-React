const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const port = 3000;

// Ejemplo de consumo de api con react
const users = [
  {
    nombre: 'John',
    edad: 24
  },
  {
    nombre: 'Andrey',
    edad: 25
  }
];

app.get('/api/users', (req, res) => {
  res.json({
    users: users
  });
  // Tambien puedo enviar un array de objects
  // res.json(users);
});

app.listen(port, () => {
  console.log(`Server on port ${port}`)
});
