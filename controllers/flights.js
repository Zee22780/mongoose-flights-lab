import { Flight } from "../models/flight.js"

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

export {
  newFlight as new,
  create,
  index,
}