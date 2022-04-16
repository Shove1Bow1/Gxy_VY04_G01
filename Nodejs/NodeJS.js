const { Router } = require("express");
const express=require("express");
const sql=require("mysql");
const router=express.Router();
const con=sql.createConnection({
     host: 'localhost',
     port:3306,
     user:"root",
     database:"cnpmnc",
     password:"debian"
}
)
const app=express();
const PORT=8020;
console.log(`listen on ${PORT}`)
con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("connection created with Mysql successfully");
      
    }
})
router.get("/service", (req, res, next) => {
            console.log(req);
            con.query("select * from SERVICE_PROVIDER", function (err, result, filesd) {
                if (err) throw err;
                res.json(result);
            });
        });
app.use('/',router);
app.listen(PORT);