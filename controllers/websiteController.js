const Website = require('../models/websitesModel');


exports.aliasTopWebsites = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = 'price';
    req.query.fields = 'name,price,summary';
    next();
};

exports.getAllWebsites = async (req, res) => {
    try {
        // BUILD QUERY
        // 1A) Filtering
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        // 1B) Advanced Filtering
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        console.log(JSON.parse(queryStr));

        let query = Website.find(JSON.parse(queryStr));

        // 2) Sorting
        if(req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            console.log(sortBy);
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        // 3) Field limiting
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields);
        } else {
            query = query.select('-_v');
        }



        // 4) Pagination
        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 100;
        const skip = (page - 1) * limit;

        query = query.skip(skip).limit(limit);

        if (req.query.page) {
            const numWebsites = await Website.countDocuments();
            if (skip >= numWebsites) throw new Error('This page does not exist');
        }


        // EXECUTE QUERY
        const websites = await query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: websites.length,
            data: {
                websites
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};




exports.getWebsite = async (req, res) => {
    try {
        const website = await Website.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                website
            }
        })
    } catch (e) {
        res.status(404).json({
            status: 'fail',
            message: e
        });
    }
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
            message: err
        })
    }
};





exports.updateWebsite = async (req, res) => {
    try {
        const website = await Website.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                website
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};




exports.deleteWebsite = async (req, res) => {
    try {
        await Website.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};


// app.get('/api/v1/websites', getAllWebsites);
// app.get('/api/v1/websites/:id', getWebsite);
// app.post('/api/v1/websites', createWebsite);
// app.patch('/api/v1/websites/:id', updateWebsite);
// app.delete('/api/v1/websites/:id', deleteWebsite);


