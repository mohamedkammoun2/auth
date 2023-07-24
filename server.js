const express=require("express");
const connectDb=require("./config/connectDb")
const user=require("./routes/user")
const app=express();
connectDb()
app.use(express.json());
app.use("/user",user)
const PORT=process.env.PORT||6000;
app.listen(PORT,err=>err?console.log(err.message):console.log(`the server is successfuly runing on PORT ${PORT}`))