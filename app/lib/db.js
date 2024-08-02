
import mongoose from "mongoose"

export function connectKaro(){

    // mongoose.connect('mongodb://localhost:27017/abcDB').then(function(connection){
        mongoose.connect('mongodb+srv://alinoor231038:ali231038@alinoor.fax1dn9.mongodb.net/meriDB').then(function(connection){

        console.log(connection)
        console.log("db conncet hoyi")

    }).catch(function(err){
        console.log(err);
    });

}