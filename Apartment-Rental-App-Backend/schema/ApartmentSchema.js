const mongoose = require("mongoose");

const ApartmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }
}, {
    collection: "Apartments" 
});

mongoose.model("Apartment", ApartmentSchema);
