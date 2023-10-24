import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DataBase connect successfully")
}).catch((e) => {
    console.log("MongoDB ERROR" + e);
})