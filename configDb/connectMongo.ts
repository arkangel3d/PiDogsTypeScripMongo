//require('dotenv').config()
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const password = process.env.MONGO_PASSWORD 
const mongoDbConnect = () => {
   
  mongoose
    .connect(`mongodb+srv://admin:${password}@cluster0.0ykiz.mongodb.net/${process.env.MONGO_DATA_BASE}`)
    .then(() =>
      console.log("******Conectado a base de datos MongoDB Atlas****")
    )
    .catch((err) => {
      console.log(err);
    });
};

export default mongoDbConnect;