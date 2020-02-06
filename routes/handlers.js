const express = require("express");
const router = express.Router();


const orm = require("../config/orm");

const { isAuthenticated } = require("../config/auth");

//const { isAuthenticated } = require("../config/auth");

//Routing 
router.get('/', (req,res)=>{
    res.render('home',{
         title: 'Home Page',
         style:'home.css'
    });
});


router.get("/dashboard",isAuthenticated, function (req, res) {
    orm.selectAll( function (error, produit) {
        if (error) {
            return res.status(501).json({
              message: 'Note able to query the database'  
            });
        }

        res.render("dashboard", {
            produit
        });
    });
});



module.exports = router;