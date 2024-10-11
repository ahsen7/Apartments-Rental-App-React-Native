const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require('dotenv').config();



const mongourl = "Your MongoDB URL";
const JWT_SECRET = "YourToken";

mongoose.connect(mongourl).then(() => {
  console.log("Database Connected Successfully")
})
  .catch((e) => {
    console.log(e);
  })

require('./schema/UserDetails');
require('./schema/ApartmentSchema');

const User = mongoose.model("UserDetails");
const Apartment = mongoose.model("Apartment");

const app = express(); 

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ status: "Server is Running" });
});

app.post('/register', async (req, res) => {
  const { name, email, mobile, password, userType } = req.body;

  const oldUser = await User.findOne({ email: email });

  const encryptpassword = await bcrypt.hash(password, 10);

  if (oldUser) {
    return res.send({ data: "User Already Exists" })
  }

  try {
    await User.create({
      name: name,
      email: email,
      mobile,
      password: encryptpassword,
      userType
    });


    res.send({ status: "Ok", data: "User Created Successfully" })

  } catch (error) {
    res.send({ status: "Error", data: error })
  }

});

app.post("/login-user", async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.send({ status: "Error", data: "User Not Found" })
  }
  if (await bcrypt.compare(password, user.password)) {

    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.send({ status: "OK", data: token, userType: user.userType })
    } else {
      return res.send({ error: "Error" })
    }
  }
});


app.post("/userdata", async (req, res) => {
  const { token } = req.body;  

  try {
    const user = jwt.verify(token, JWT_SECRET);  
    const useremail = user.email;  

    const data = await User.findOne({ email: useremail });

    if (data) {
      return res.send({ status: "Ok", data });  
    } else {
      return res.send({ status: "Error", message: "User not found" });
    }
  } catch (error) {
    return res.send({ status: "Error", message: "Invalid token or error retrieving user data", error });
  }
});

app.post("/api/apartments", async (req, res) => {
  const { name, location, price, description, image } = req.body;

  try {
    const apartment = await Apartment.create({ name, location, price, description, image });
    res.send({ status: "Ok", data: apartment });
  } catch (error) {
    res.send({ status: "Error", message: error.message });
  }
});

app.get("/api/apartments", async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.send({ status: "Ok", data: apartments });
  } catch (error) {
    res.send({ status: "Error", message: error.message });
  }
});

app.get("/api/apartments/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const apartment = await Apartment.findById(id);
    if (apartment) {
      res.send({ status: "Ok", data: apartment });
    } else {
      res.send({ status: "Error", message: "Apartment not found" });
    }
  } catch (error) {
    res.send({ status: "Error", message: error.message });
  }
});


app.put("/api/apartments/:id", async (req, res) => {
  const { id } = req.params;
  const { name, location, price, description, image } = req.body;

  try {
    const apartment = await Apartment.findByIdAndUpdate(id, { name, location, price, description, image }, { new: true });
    if (apartment) {
      res.send({ status: "Ok", data: apartment });
    } else {
      res.send({ status: "Error", message: "Apartment not found" });
    }
  } catch (error) {
    res.send({ status: "Error", message: error.message });
  }
});

app.delete("/api/apartments/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const apartment = await Apartment.findByIdAndDelete(id);
    if (apartment) {
      res.send({ status: "Ok", message: "Apartment deleted successfully" });
    } else {
      res.send({ status: "Error", message: "Apartment not found" });
    }
  } catch (error) {
    res.send({ status: "Error", message: error.message });
  }
});


app.get('/apartments', async (req, res) => {
    try {
        const apartments = await Apartment.find(); 
        res.send(apartments);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch apartments' });
    }
});







app.listen(3001, () => {
  console.log("Server started on port 3001");
});
