import cluster from "cluster" ;
import os from "os" ;
import { app } from ".";


const coreCount = os.cpus().length ;


if(cluster.isPrimary){
    cluster.fork()
}else{
    app.listen(3001 )
}