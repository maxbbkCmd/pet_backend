import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormData } from "./types";
import axios from 'axios';

function App() {
  const [form, setForm] = useState<FormData>({
    name: "",
    login: "",
    adres: "",
    img: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user', form);
      console.log('Ответ от сервера:', response.data);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='mb-3'>
            <label className='form-label'>ФИО</label>
            <input
              type='text'
              id='fio'
              className='form-control'
              placeholder='Введите ФИО'
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Логин</label>
            <input
              type='text'
              id='login'
              className='form-control'
              placeholder='Введите логин'
              name="login"
              value={form.login}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Адрес</label>
            <input
              type='text'
              id='addres'
              className='form-control'
              placeholder='Введите адрес'
              name="adres"
              value={form.adres}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Фото профиля</label>
            <input
              type='text'
              id='profilePhoto'
              className='form-control'
              name="img"
              value={form.img}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='btn btn-secondary w-100'
            onClick={handlSubmit}>
            Отправить
          </button>
        </div>

        <div className='col-md-8'>
          <button className='btn btn-secondary mb-3'>
            Выгрузить список контрагентов
          </button>
          <div className='table-container'>
            <table className='table text-center'>
              <thead>
                <tr>
                  <th>Фото</th>
                  <th>Логин</th>
                  <th>ФИО</th>
                  <th>Адрес</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Фото 1</td>
                  <td>Логин 1</td>
                  <td>ФИО 1</td>
                  <td>Адрес 1</td>
                </tr>
                <tr>
                  <td>Фото 2</td>
                  <td>Логин 2</td>
                  <td>ФИО 2</td>
                  <td>Адрес 2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
