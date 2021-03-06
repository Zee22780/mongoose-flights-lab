import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight(req, res) {
  res.render("flights/new")
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err){
    if (err) return res.redirect("/flights/new")
    res.redirect("/flights")
  })
}

function index(req, res) {
  Flight.find({}, function(error, flights){
    res.render("flights/index",{
      flights: flights,
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .exec(function (err, flight) {
    Meal.find({_id: {$nin: flight.meals}}, function( err, meals) {
      res.render('flights/show', { 
        title: 'Flight Details', 
        flight,
        meals,
      })
    })
  })
}

function addTicket(req, res){
  Flight.findById(req.params.id, function(err, flight){
    flight.tickets.push(req.body)
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addMealToFlight(req, res){
  Flight.findById(req.params.id, function(err, flight){
    flight.meals.push(req.body.mealId)
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  addTicket,
  addMealToFlight
}