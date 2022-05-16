const express = require("express");
const routesProducts= require('./routesProducts.js');
//const multer=require('multer');
const app=express();

const PORT=8080;
const server=app.listen(PORT,()=>{
    console.log(`Servidor escuchando puerto ${PORT}`);
});

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, __dirname+"/public/uploads")
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

//app.use(multer({storage}).single("image"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.set('views','./views');
app.set('view engine', 'pug');
app.use("/",routesProducts);
