const Express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const http = require('http');

const app = Express();
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json());
app.use(cors());
app.use(morgan('tiny'));


const uri="mongodb://127.0.0.1:27017/stage";
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true ,})
mongoose.connection.on('err', () => { console.log('connection failed') });
mongoose.connection.on('ok', () => { console.log('connection done') })

const StagRoute = require("./routes/StageRoute");
const CandidateRoute=require("./routes/candidateRoute")
const candidatureRoute=require("./routes/CandidatureRoute")
app.use("/stage",StagRoute);
app.use("/candidate",CandidateRoute)
app.use("/demande",candidatureRoute)
app.use('/uploads', Express.static('uploads'));

const server = http.createServer(app)



server.listen(3000, () => {

    console.log("server is listenning on 3000");
 })




