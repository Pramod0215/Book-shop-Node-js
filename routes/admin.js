const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="post"><input name="title" type="text"/><input type="submit" value="add Product"/></form>')
});
router.post('/product',(req,res,next)=>{
    res.redirect('/')
});

module.exports = router;