import cluster from "cluster" ;
import os from "os" ;

import express from "express" ;

const coreCount = os.cpus().length ;

console.log(coreCount)