const express=require("express")
const {connection}  =require("./config/db")

const app=express();
const router=require("./routes/routes")


app.use("/api",router)


app.listen(4001,()=>{
    try{
        connection()
    console.log("app running fine")
    }
    catch(err){
        console.log(err)
    }
})