import express, { Router } from "express";
import userRoutes from "./src/routes/user.routes.js";

const app = express();
const router = Router();
const DEFAULT_PORT = 3000;

app.use(express.json());
app.use(express.static("assets"));

router.get("/health", function (req, res) {
  res.send("API WORKING");
});

router.use("/users", userRoutes);

app.use("/api/v1", router);


app.use(function (req, res) {
  res.status(404).send("NOT FOUND");
});

app.listen(DEFAULT_PORT, function () {
  console.log(`Server running on ${DEFAULT_PORT}`);
});