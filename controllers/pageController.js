const homePage = async(req,res)=>{
    res.render('index')
}

const dashboard = async(req,res)=>{
    if(req.cookies.role == "government"){
        res.render('dashboard',{title:"Government Dashboard"})
    }else if(req.cookies.role == "industry"){
        res.render('dashboard',{title:"Industry Dashboard"})
    }else{
        res.render('dashboard',{title:"Individual Dashboard"})
    }
}

const mark_co2 = async (req,res)=>{
    res.render('markCo2')
}


module.exports = {homePage, dashboard,mark_co2}