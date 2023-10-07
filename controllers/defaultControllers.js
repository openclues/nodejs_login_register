module.exports = {
    index : (req , res)=>{
        res.render('default/index')
    }, 
    loginRoute : (req, res)=>{
        res.render('default/login')
    }

}