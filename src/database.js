import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/cafejony";
const url = "mongodb+srv://pabloabadie1995:Conichugua1@clustertest.8n6ar.mongodb.net/cafeJony";

mongoose.connect(url)

const conexion = mongoose.connection;

conexion.once("open",()=>{
    console.log("BD conectada")
})