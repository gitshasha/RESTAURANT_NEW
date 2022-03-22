const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const vendor = require("./Vendors");
const UserModel = require("./models/Users");
const Loguser = require("./models/Loguser");
const bcrypt = require("bcryptjs");
const port = 5000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
let bodyParser = require("body-parser");
const api = require("../backend/routes/user.routes");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (req, res) => {
  res.send("HELLL");
});
const JWT_SECRET =
  "sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk";
const uri =
  "mongodb+srv://shashank:kinnichiwa123@cluster0.isfeq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
app.use(express.json());

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
app.post("/image", async (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.use("/public", express.static("public/images"));

app.use("/api", api);
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Loguser.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }

  if (await bcrypt.compare(password, user.password)) {
    // the username, password combination is successful

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET
    );

    return res.json({ status: "ok", data: token });
  }

  res.json({ status: "error", error: "Invalid username/password" });
});

app.post("/register", async (req, res) => {
  const { username, password: plainTextPassword } = req.body;

  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const response = await Loguser.create({
      username,
      password,
    });
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  res.json({ status: "ok" });
});
app.listen(port, () => {
  console.log("APP LISTENING.....");
});
