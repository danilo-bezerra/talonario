import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.18.9:3333',
});

export const apiConsultaPlaca = axios.create({
  baseURL:
    "https://www.fipeplaca.com.br/_next/data/WGPJkdDfWv_2lHAboCzpJ/placa",
});

export const apiLocalizacao = axios.create({
  baseURL: "http://192.168.18.9:3333",
});


///cry6661.json?placa=cry6661