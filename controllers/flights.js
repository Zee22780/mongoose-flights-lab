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

function show(req, res){
  Flight.findById(req.params.id, function (err, flight){
    res.render("flights/show", {
      flight: flight,
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

export {
  newFlight as new,
  create,
  index,
  show,
  addTicket,
}