const express = require('express');

var resController = require('../Controllers/Res');
var cityController = require('../Controllers/City');
var mealTypeController = require('../Controllers/MealType');
var restaurantController = require('../Controllers/Restaurant');

const router = express.Router();

router.get('/getResById/:resId', resController.getResById);

router.get('/restaurantListFilter', restaurantController.filter);

router.get('/getRestaurantList', resController.getRestaurantList);
router.post('/addRestaurantList', resController.addRestaurantList);

router.get('/cityList', cityController.getCityList);
router.post('/addcityList', cityController.addCityList);

router.get('/mealtype', mealTypeController.getMealType);
router.post('/addmealtype', mealTypeController.addMealType);

module.exports = router;
