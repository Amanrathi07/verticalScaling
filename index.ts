import express from "express" ;

export const app = express();


app.get("/",(req,res)=>{
    res.json({message:"server is working"})
})

app.listen(3000)