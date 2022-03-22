let express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const UserModel = require("../models/Users");
const FoodModel = require("../models/Food");
const RestaurantModel = require("../models/Restaurant");
const DIR = "./public/images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

// User model

router.post("/image", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const user = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    profileImg: url + "/public/" + req.file.filename,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          profileImg: result.profileImg,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

// food model

router.post("/Food", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const food = new FoodModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    profileImg: url + "/public/" + req.file.filename,
  });
  food
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          profileImg: result.profileImg,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

// Restaurtant ENTRY
router.post("/Restaurant", upload.single("profileImg"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const restaurant = new RestaurantModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    FoodItems: [
      {
        name: "jjkjgk",
        profileImg: url + "/public/" + req.file.filename,
      },
    ],
  });
  restaurant
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          profileImg: result.profileImg,
        },
      });
    })
    .catch((err) => {
      console.log(err),
        res.status(500).json({
          error: err,
        });
    });
});

// FOOD DETAILS
router.get("/getfood", (req, res) => {
  RestaurantModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
//   USERDETAILS
router.get("/", (req, res, next) => {
  User.find().then((data) => {
    res.status(200).json({
      message: "User list retrieved successfully!",
      users: data,
    });
  });
});

module.exports = router;
