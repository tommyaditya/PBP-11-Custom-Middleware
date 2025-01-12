const {response} = require('express')

fetch('http://localhost:3000/api/user',{
    method : 'POST',
    Headers : {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name : 'agus',
        email : 'agus@gmail.com',
        phone : '085796578125'
    })
})