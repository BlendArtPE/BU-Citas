// app.js
import User from './userModel';

// Crear un nuevo usuario
const newUser = new User({
  username: 'ejemplo',
  email: 'ejemplo@email.com',
  password: 'contraseña123',
});

// Guardar el nuevo usuario en la base de datos
newUser.save()
  .then(result => {
    console.log('Usuario creado:', result);
  })
  .catch(error => {
    console.error('Error al crear el usuario:', error);
  });