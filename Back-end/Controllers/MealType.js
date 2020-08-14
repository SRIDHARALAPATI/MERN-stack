const MealType = require('../Models/MealType');

exports.getMealType = (req, res, next) => {
    MealType.find().then(result => {
        res.status(200).json({ message: "MealType Fetched Sucessfully", mealtype: result })
    })
}

exports.addMealType = (req, res, next) => {
    const meal_name = req.body.meal_name;
    const content = req.body.content;
    const meal_id = req.body.meal_id;
    const img_src = req.body.img_src;

    // check to remove duplicacy

    const MealTypeList = new MealType({ meal_name: meal_name, content: content, meal_id: meal_id,img_src:img_src });
    MealTypeList.save().then(result => {
        console.log(result);
        res.status(200).json({ message: "MealType Added Sucessfully", mealtype: result })
    }).catch(err => {
        console.log(err)
    })
}
