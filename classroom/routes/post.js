const express= require("express");
const router=express.router();

router.get("/",(req,res)=> {
    console.log("Get for post");
});

router.post("/",(req,res)=> {
    console.log("Post for posts");
});

module.exports = router;