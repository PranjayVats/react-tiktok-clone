import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
const router = express.Router();
dotenv.config({ path: ".env" });

//App Config
//Creating Instance
const app = express();

const port = process.env.PORT || 9000;
const connection_url = process.env.MONGO_URI;

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: Number,
  messages: String,
  description: String,
  shares: String,
});
const tiktok = mongoose.model("tiktokvideos", tiktokSchema);
router.get("/", (req, res) => res.status(200).send("Its working"));
router.get("/v1/posts", (req, res) => {
  tiktok.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
router.get("/v2/posts", (req, res) => {
  tiktok.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
router.post("/v2/posts", (req, res) => {
  //Post request is to ADD DATA  to the database
  //It will let us ADD a video DOCUMENT to the videos COLLECTION
  const dbVideos = req.body;
  tiktok.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//Listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
app.use("/.netlify/functions/server", router);
export const handler = serverless(app);
