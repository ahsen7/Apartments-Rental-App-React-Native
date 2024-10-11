const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    mobile: String,
    userType: String
},{
    collection: "UserDetails"
});

mongoose.model("UserDetails", UserSchema);