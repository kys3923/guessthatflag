const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res)=>{
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response=>{
        // handle success
        console.log(response)
      })
  })

app.listen(8000);