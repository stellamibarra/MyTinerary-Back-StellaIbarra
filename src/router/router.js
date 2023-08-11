const express = require("express")

const router = express.Router()
const {getClients,getClient}=require("../controllers/clientsController")
router.get('/clients',getClients )
router.get('/client', getClient)
router.get("/client/:id",getClient)
module.exports = router