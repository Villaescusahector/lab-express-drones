// Iteration #1

const mongoose = require("mongoose");
const DroneModel = require('../models/Drone.model')
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

const drones = [
    { name: "1", propellers: 3, maxSpeed: 12 },
    { name: "2", propellers: 4, maxSpeed: 20 },
    { name: "3", propellers: 6, maxSpeed: 18 }
];

mongoose
    .connect(MONGO_URI)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .then(() => {
        return DroneModel.create(drones)
    })
    .then((drones) => {
        console.log(drones)
    })
    .catch((err) => {
        console.error("Error connecting to mongo: ", err);
    });





