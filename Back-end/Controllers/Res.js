const Res = require('../Models/Res');

exports.getRestaurantList = (req, res, next) => {
    Res.find().then(result => {
        res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: result })
    })
}

exports.addRestaurantList = (req, res, next) => {
    const name = req.body.name;
    const city = req.body.city;
    const logo = req.body.logo;
    const location_id=req.body.location_id;
    const city_id=req.body.city_id;
    const locality=req.body.locality;
    const thumb=req.body.thumb;
    const aggregate_rating=req.body.aggregate_rating;
    const rating_text=req.body.rating_text;
    const min_price=req.body.min_price;
    const contact_number=req.body.contact_number;
    const type=req.body.type;
    const Cuisine=req.body.Cuisine;
    const Rest = new Res({ name: name, city: city, logo: logo,location_id:location_id, city_id:city_id, locality:locality,thumb:thumb, aggregate_rating:aggregate_rating,rating_text:rating_text, min_price:min_price,contact_number:contact_number,type,Cuisine:Cuisine  });
    Rest.save().then(result => {
        console.log(result);
        res.status(200).json({ message: "Restaurant Added Sucessfully", restaurant: result })
    }).catch(err => {
        console.log(err)
    })
}

exports.getResById = (req, res, next) => {
    const resId = req.params.resId;
    console.log(resId);
    Res.findById(resId).then(result => {
        res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: result })
    }).catch(err => console.log(err));

}
