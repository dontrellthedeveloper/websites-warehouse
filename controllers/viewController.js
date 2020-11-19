exports.getOverview = (req,res) => {
    res.status(200).render('overview', {
        title: 'All Websites'
    });
};

exports.getWebsite = (req,res) => {
    res.status(200).render('website', {
        title: 'Beverly Hills Models'
    });
};