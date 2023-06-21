import axios from 'axios';

axios.defaults.baseURL = 'https://64932984428c3d2035d170c9.mockapi.io/contacts';

async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function postUser() {
  try {
    const response = await axios.post('/user?ID=12345', {
      firstName: 'Fred',
      lastName: 'Flintstone',
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser() {
  try {
    const response = await axios.delete('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

axios
  .post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//  fetchContacts - получение массива контактов (метод GET) запросом.
//  Базовый тип экшена "contacts/fetchAll".

// addContact - добавление контакта (метод POST).
// Базовый тип экшена "contacts/addContact".

// deleteContact - удаление контакта (метод DELETE).
// Базовый тип экшена "contacts/deleteContact".
