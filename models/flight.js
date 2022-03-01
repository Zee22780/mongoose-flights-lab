import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  airport: {type: String, default: "DEN"},
  flightNo:{
    type: Number,
    min: 10,
    max: 9999
  },
  departs: Date, 
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}