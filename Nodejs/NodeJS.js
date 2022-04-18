///
///// - Require and Configure
///
const express=require('express');
let multer = require('multer');
let upload = multer();
const app=express();
const cors=require('cors');
const mysql=require('mysql');
const router=express.Router();
app.use(upload.array());
app.use(express.json());
app.use(cors());
const PORT=8020;
app.listen(PORT||8080,console.log(PORT));
app.use('/',router);
const con=mysql.createConnection({
       user:"root",
    host:"localhost",
    port:3306,
    database:'cnpmnc',
    password:'debian'
})
con.connect(err=>{
    if(err) throw err;
    else console.log("connected");
})
///
//////-COMMAND LINES
///

//-Admin only
router.get("/Admin/getServiceManager", (req, res, next) => {
    con.query("select * from SERVICE_PROVIDER", function (err, result, filesd) {
        if (err) throw err;
        res.set('Access-Control-Allow-Origin', '*')
        res.send(JSON.stringify(result));
    });
});
router.get("/Admin/getServiceManager/:id", (req, res) => {   
    con.query("select * from SERVICE_PROVIDER where APP_ID ='"+req.params.id+"'",function(err,result,filesd){
        if(err) throw err;
        res.set('Access-Control-Allow-Origin', '*'); 
        res.send(JSON.stringify(result));
    });
})

router.post("/Admin/getServiceManager/:id",upload.none(),(req,res,next)=>{
    res.end("send");
    con.query("Update SERVICE_PROVIDER set MIN_PRICE=" + parseInt(req.body.MIN_PRICE) +
        ", MAX_PRICE=" + parseInt(req.body.MAX_PRICE) +
        ", POINT_EXCHANGE_RANGE =" + parseInt(req.body.POINT_EXCHANGE_RANGE) +
        " WHERE APP_ID='" + req.path.id + "';",
        function (err, result, filesd) {
            if (err) throw err;
            console.log("update")
            
        });
})
router.post("/Admin/Login",upload.none(),(req,res,next)=>{
    console.log(req.body.ADMIN_NAME);
    if(req.body.ADMIN_NAME||req.body.ADMIN_PASSWORD){
        res.end();
    }
    con.query("Select * from ADMIN where ADMIN_NAME='"+req.body.ADMIN_NAME+"' AND ADMIN_PASSWORD='"+req.body.ADMIN_PASSWORD+"';",function(err,result,filesd){
        if(err) throw err;
        session.ADMIN_ID=result[0].ADMIN_ID;
        session.ADMIN_NAME=result[0].ADMIN_NAME;
        console.log("success");
    })
})
router.get("/Admin/StayLogin",(req,res,next)=>{
    res.set('Access-Control-Allow-Origin', '*');
    if (session.ADMIN_ID && session.ADMIN_NAME) {
        res.send({message:"Loged in"});
    }
    else {
        res.send({message:"no Admin"})
    }
})
router.get("/Admin/Logout",(req,res,next)=>{
    session.ADMIN_ID=null;
    session.ADMIN_NAME=null;
    console.log(req.session);
    res.end();
})
