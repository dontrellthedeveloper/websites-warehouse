const Website = require('../models/websitesModel');



exports.getAllWebsites = (req, res) => {
    res.status(200).json({
        status: 'success',
        // results: websites.length,
        // data: {
        //     websites
        // }
    })
};




exports.getWebsite = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    // const website = websites.find(el => el.id === id);
    //
    // res.status(200).json({
    //     status: "success",
    //     data: {
    //         website
    //     }
    // })
};




exports.createWebsite = async (req, res) => {
    try {
        const newWebsite = await Website.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                website: newWebsite
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: "Invalid data sent!"
        })
    }
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


