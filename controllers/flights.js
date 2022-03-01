import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new")
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function(err){
    if (err) return res.redirect("/flights/new")
    res.redirect("/flights/new")
  })
}

export {
  newFlight as new,
  create,
}