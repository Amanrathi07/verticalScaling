import cluster from "cluster" ;
import os from "os" ;
import { app } from ".";


const coreCount = os.cpus().length ;


if(cluster.isPrimary){
    
    for(let i=0;i<coreCount;i++){
        cluster.fork()
    }
}else{
    app.listen(3000)
}
