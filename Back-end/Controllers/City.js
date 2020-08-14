const City = require('../Models/City');

exports.getCityList = (req, res, next) => {
    City.find().then(result => {
        res.status(200).json({ message: "City Fetched Sucessfully", city: result })
    })
}

exports.addCityList = (req, res, next) => {
    const name = req.body.name;
    const city_id = req.body.city_id;
    const location_id = req.body.location_id;
    const country_name = req.body.country_name;
    const cities = new City({ name: name, city_id: city_id, location_id: location_id, country_name: country_name });
    cities.save().then(result => {
        console.log(result);
        res.status(200).json({ message: "Cities Added Sucessfully", city: result })
    }).catch(err => {
        console.log(err)
    })
}
