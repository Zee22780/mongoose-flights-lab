import { Flight } from '../models/flight.js'
import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({}, function (err, meals){
    res.render('meals/new', {
      title: 'Add Meal',
      meals: meals,
    })
  })
}

function create(req, res) {
  Meal.create(req.body, function (err, meal){
    res.redirect('/meals/new')
  })
}

function addToMeals(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.meal.push(req.body.mealId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}


export {
  newMeal as new,
  create,
  addToMeals,
}