const express = require('express')

const app = express();

app.get('/', function(request, response) {
    const kelas ={ 
        id : 1,
        nama: 'Nodejs'
    }
    // console.log('Hello Word!')
    response.send(kelas)
})

app.get('/about' , function(requerst,response){
    response.send('About')
})

app.get('/users' , function(requerst,response){
    response.send('Get User')
})

app.post('/users' , function(requerst,response){
    response.send('Post User')
})

app.put('/users' , function(requerst,response){
    const id = request.params
    response.send(id)
})

app.delete('/users/:userId' , function(requerst,response){
    response.send('request.params')
})

app.listen(3000, function() {
    console.log('Server is okay on port 3000')
})
