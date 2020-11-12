const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).json({message: 'Hello from the server side!', app: 'Websites Warehouse'});
// });
//
// app.post('/', (req, res) => {
//     res.send('You can post to this endpoint...')
// });

const websites = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/websites-simple.json`)
);

app.get('/api/v1/websites', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: websites.length,
        data: {
            websites
        }
    })
});




app.get('/api/v1/websites/:id', (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;
    const website = websites.find(el => el.id === id);

    // if(id > websites.length) {
        if(!website) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }



    res.status(200).json({
        status: "success",
        data: {
            website
        }
    })
});




app.post('/api/v1/websites', (req, res) => {

    const newId = websites[websites.length - 1].id + 1;
    const newWebsite = Object.assign({id: newId}, req.body);

    websites.push(newWebsite);

    fs.writeFile(`${__dirname}/dev-data/data/websites-simple.json`, JSON.stringify(websites), err => {
        res.status(201).json({
            status: 'success',
            data: {
                website: newWebsite
            }
        })
    });
});




const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});