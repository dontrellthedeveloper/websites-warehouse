const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();


// 1. Middleware
app.use(morgan('dev'));
app.use(express.json());



const websites = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/websites-simple.json`)
);

// 2. Route Handlers
const getAllWebsites = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: websites.length,
        data: {
            websites
        }
    })
};

const getWebsite = (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;

    if(id > websites.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    const website = websites.find(el => el.id === id);

    res.status(200).json({
        status: "success",
        data: {
            website
        }
    })
};




const createWebsite = (req, res) => {

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
};

const updateWebsite = (req, res) => {
    if(req.params.id * 1 > websites.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            website: '<Updated Tour here...>'
        }
    });
};

const deleteWebsite = (req, res) => {
    if(req.params.id * 1 > websites.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};


// app.get('/api/v1/websites', getAllWebsites);
// app.get('/api/v1/websites/:id', getWebsite);
// app.post('/api/v1/websites', createWebsite);
// app.patch('/api/v1/websites/:id', updateWebsite);
// app.delete('/api/v1/websites/:id', deleteWebsite);

// 3. Routes
app
    .route('/api/v1/websites')
    .get(getAllWebsites)
    .post(createWebsite);

app
    .route('/api/v1/websites/:id')
    .get(getWebsite)
    .patch(updateWebsite)
    .delete(deleteWebsite);


// 4. Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});