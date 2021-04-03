const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());


//root api
app.get('/', (req, res) => {

    console.log("Thank you for calling");
    res.send("Thank you for calling")
});

//changed end point api
app.get('/employee', (req, res) => {
    const product = {
        name: 'samin',
        title: 'junior web developer',
        salary: '30,000'
    };
    console.log(product);
    res.send(product);
});


//dynamic endpoint api>>>
const users = ['samin', 'ferdous', 'ucchash', 'moine', 'tareq'];
//dynamic endpoint api without query
app.get('/users/:id' /*id/num/productId etc*/, (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const name = users[id];
    console.log(name);
    res.send({ id, name });
});

//dynamic endpoint api with query (normally not used in new websites)
const students = ['samin', 'ferdous', 'ucchash', 'moine', 'tareq'];
app.get('/students/:id' /*id/num/productId etc*/, (req, res) => {
    console.log(req.params.id);
    console.log(req.query); /* /students/:2?sort=asc */
    const id = req.params.id;
    const name = students[id];

    res.send({ id, name });
});
//dynamic endpoint api<<<

//post
app.post('/addUser', (req, res) => {
    console.log('post req received by server');
    console.log('server got', req.body);
    res.send(req.body);
});

app.listen(5050, () => console.log("Listening to port 5050"));