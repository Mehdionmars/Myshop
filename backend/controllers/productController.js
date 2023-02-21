let Product = require('../models/product')
    exports.getAllProducts =async (req,res)=>{
        try{
         const {page=1,limit=5} = req.query
         const produits = await Product.find()
         .limit(limit)
         .skip((page - 1)*limit)
         .sort({_id:'desc'})
         .exec()
         const Count = await Product.countDocuments()
            res.status(200).json({
            success:true,
            totalPages : Math.ceil(count/limit),
            produits
        })
    }catch(err){
        res.status(400).json({
            error:err.message
        })
    }
}
//-----------ajout--------------
exports.addProduct = async (req,res)=>{
    const produit = new Product(req.body)
    await produit.save()
    res.status(200).json({
        success:true,
        produit
    })
}
//-----------one product------------
exports.getOneProductById = async(req,res)=>{
    _id = req.params.idProd
    const produit =await Product.findOne({
        _id:req.params.idProd
    })
    res.status(200).json({
        success:true,
        produit
    })

}
//-----------Update----------
exports.updateProduct = async (req, res)=>{
    const Update_prod = await Product.updateOne(
        {_id:req.params.idProd},
        {
            $set:req.body
        }
    )
    res.status(200).json({
        success:true,
        Update_prod
    })
}
///-----------Delete---
exports.deleteProduct = async (req, res) =>{
    const del_prod = await Product.deleteOne(
    {_id:req.params.idProd}
    )
    res.status(200).json({
        deleted:true,
        del_prod
    })
 }
