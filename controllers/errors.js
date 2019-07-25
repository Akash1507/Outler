exports.get404Page = (req,res,next) =>{
    res.status(404).render('notfound',{pageTitle:"404 Page",path:'/'});
}