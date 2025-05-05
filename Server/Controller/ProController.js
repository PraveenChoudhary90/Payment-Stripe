const ProModel = require("../Model/ProModel");


const InsertData = async(req,res)=>{
    const { name, brand,price,image} = req.body;
    const ImageUrl = req.files.map(file=>file.path);
    try {
        const Data = await ProModel.create({
            name:name,
            brand:brand,
            price:price,
            defaultImage:ImageUrl[0],
            images:ImageUrl


        })
        res.send({msg:"Data Is Insterd"})
        // console.log(Data);
    } catch (error) {
        console.log(error);
    }
}


const Display = async(req,res)=>{
    const Data = await ProModel.find();
    res.status(200).send(Data);
}


module.exports = {
    InsertData,
    Display
}