//require('dotenv').config()
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const password = process.env.MONGO_PASSWORD 
const name = process.env.MONGO_DATA_BASE 
const user = process.env.MONGO_USER
const mongoDbConnect = () => {
   
  mongoose
    .connect(`mongodb+srv://${user}:${password}@cluster0.0ykiz.mongodb.net/${name}`)
    .then(() =>
      console.log("******Conectado a base de datos MongoDB Atlas****")
    )
    .catch((err) => {
      console.log(err);
    });
};

export default mongoDbConnect;