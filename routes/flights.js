import { Router } from 'express'

const router = Router()

// GET localhost:3000/flights/new
router.get("/new", flightsCtrl.new) 

export {
  router
}
