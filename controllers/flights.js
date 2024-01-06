// this imports the movie model
const Flight = require('../models/flight')

async function newFlight(req, res) {
    //this controller renders a new form for movies
    res.render('flights/new', { errorMsg: ''})
}

async function create(req, res) {
    try {
        // this is where we use the mongoose model method 'create'
        await Flight.create(req.body)
        //after C-U-D of CRUD, we almost always redirect
        res.redirect('/flights')
    } catch (err) {
        // if we have an error(which will typically be a validation error)
        // we'll print the error to console and render something else
        console.log('an error occured: \n', err)

        res.render('flights/new', { errorMsg: Flight.exists.messege })
    }
    // res.send(req.body)
}

async function index(req, res) {
    try {
        // another mongoose model method - find
        const allFlights = await Flight.find({})

        res.render('flights/index', { flights: allFlights })
    } catch (err) {
        console.log('an error occured: \n', err)

        res.render('error', { error: err })
    }
}

module.exports = {
    // this frist one tells you you can rename functions 
    // that are being exported from a file
    new: newFlight,
    create,
    index
}