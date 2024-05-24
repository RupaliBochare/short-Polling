// const express = require('express');
// const app = express();

// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, (req, res)=> {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


const express = require('express');
const app = express();
const port = 3000;


//serve static file

// app.use(express.static(path.join(__dirname, 'public')));

let data ="initial Data";

app.get('/', (req, res)=> {
    res.sendFile(__dirname+ '/index.html')
})

app.get('/getData', (req, res) => {
    res.send({
        data
    });

})

app.get('/updateData', (req, res)=> {
    data = "updated data";
    res.send({
     data
    })
})

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`);
}) 