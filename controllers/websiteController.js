const fs = require('fs');

const websites = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/websites-simple.json`)
);


exports.checkID = (req, res, next, val) => {
    console.log(`Website id is: ${val}`);
    if(req.params.id * 1 > websites.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.getAllWebsites = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: websites.length,
        data: {
            websites
        }
    })
};

exports.getWebsite = (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;
    const website = websites.find(el => el.id === id);

    res.status(200).json({
        status: "success",
        data: {
            website
        }
    })
};




exports.createWebsite = (req, res) => {

    const newId = websites[websites.length - 1].id + 1;
    const newWebsite = Object.assign({id: newId}, req.body);

    websites.push(newWebsite);

    fs.writeFile(`${__dirname}/../dev-data/data/websites-simple.json`, JSON.stringify(websites), err => {
        res.status(201).json({
            status: 'success',
            data: {
                website: newWebsite
            }
        })
    });
};

exports.updateWebsite = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            website: '<Updated Tour here...>'
        }
    });
};

exports.deleteWebsite = (req, res) => {
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


