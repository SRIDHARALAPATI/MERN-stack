const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealTypeSchema = new Schema({
    meal_name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    meal_id: {
        type: Number,
        required: true
    },
    img_src:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('MealType', MealTypeSchema);