const express= require("express");
const router=express.router();

router.get("/",(req,res)=> {
    console.log("Get for users");
});

router.post("/",(req,res)=> {
    console.log("Post for users");
});

module.exports = router;