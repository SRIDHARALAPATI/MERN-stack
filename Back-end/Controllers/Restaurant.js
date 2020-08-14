const Restaurant = require('../Models/Restaurant');

exports.filter = (req, res, next) => {
    const queryParams = req.query;
    const location_id = queryParams.location_id;
    const city_id = queryParams.city_id;
    const type=queryParams.type
    const cost = queryParams.cost;
    const sort=queryParams.sort;
    const page = queryParams.page;
    let start;
    let end;
    start = Number(page * 2) - 2;
    end = Number(page * 2);
    if(city_id==0 && location_id==0)
        {
            Restaurant.find({type:{$in:Number(type)} }).sort({ min_price: sort}).then(result => {
                const count = result.length / 2;
                const resultValues = result.slice(start, end);
                res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: resultValues, pageCount: count })
            }).catch(err => console.log(err));
        }
    else
    {
        Restaurant.find({ location_id: Number(location_id), city_id: Number(city_id),type:{$in:Number(type)},min_price:  { $gte: Number(cost) ,  $lte: Number(cost) + 500 } }).sort({ min_price: sort}).then(result => {
            const count = result.length / 2;
            const resultValues = result.slice(start, end);
            res.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurant: resultValues, pageCount: count })
        }).catch(err => console.log(err));
        }
    
}


