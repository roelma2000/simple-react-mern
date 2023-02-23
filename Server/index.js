const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.listen(3001, () => {
    console.log("SERVER RUNS SUCCESSFULLY!");
});

app.get("/getUsers", (req, res) =>{
    UserModel.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else {
            res.json(result);
        }
    })
});

app.post("/CreateUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})

mongoose.connect("mongodb://127.0.0.1:27017/StudentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});


