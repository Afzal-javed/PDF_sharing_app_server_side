import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import pdfRoute from "./routes/pdfRoutes.js";
import userRoute from "./routes/userRoute.js";
import deleteRoute from "./routes/deleteRoute.js";
import logoutRoute from "./routes/logoutRoute.js";
import generatedPdfRoute from "./routes/generatedPdfRoute.js";
import "./DB/connection.js";

const PORT = process.env.PORT || 7001
const app = express();
dotenv.config();
// app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: "50mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/pdf", pdfRoute);
app.use("/api", userRoute);
app.use("/api", generatedPdfRoute);
app.use("/api/pdf", deleteRoute);
app.use("/api/user", logoutRoute);
app.get("/", (req, res) => {
    res.send("Welcome Again to PDF Sharing App");
})

app.listen(PORT, () => {
    console.log(`server running in : ${PORT}`);
})