import cluster from "cluster" ;
import os from "os" ;

import express from "express" ;

const coreCount = os.cpus().length ;

export const app = express();


app.get("/",(req,res)=>{
    res.json({message:"server is working"})
})

app.listen(3000)