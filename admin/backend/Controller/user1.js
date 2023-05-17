const mar = require('../model/user')


const getData = async(req,res)=>{
     let mobiles;
     try{
        mobiles=await mar.find();
     }
     catch(err){
        console.log(err)
     }
     if(!mobiles){
        return res.status(404).json({message:"mobiles is not found"})
        
     }
     return res.status(200).json({mobiles})
}

const postData = async(req,res)=>{
   const {name,brand,model,price,image} = req.body;
   let post;
   try{
      post = new mar ({
         name,
         brand,
         model,
         price,
         image
      })
      await post.save()
   }
   catch(err){
      console.log(err)
   }
   if(!post){
      return res.status(500).json({message :"no mobile are found"})
   }
   return res.status(202).json({post})
    
}
const getById = async (req, res, next) => {
   const id = req.params.id;
   let mobile;
   try {
     mobile = await Mobile.findById(id);
   } catch (err) {
     console.log(err);
   }
   if (!mobile) {
     return res.status(404).json({ message: "No Mobile found" });
   }
   return res.status(200).json({ mobile });
 };

const updatemobile = async(req,res)=>{
   const id = req.params.id;
   const{name, brand, model, price, image } = req.body;
   let mobile;
   try{
      mobile = await mar.findByIdAndUpdate(id,{
         name,
         brand,
         model,
         price,
         image
      });
      mobile = await mar.save();
   }
   catch(err){
      console.log(err);
      if(!mobile){
         return res.status(404).json({message:"Unable to update this id"})
      }
      return res.status(200).json({mobile})
   }
   
}
const deletemobile = async (req, res, next) => {
   const id = req.params.id;
   let mobile;
   try {
     mobile = await mar.findByIdAndRemove(id);
   } catch (err) {
     console.log(err);
   }
   if (!mobile) {
     return res.status(404).json({ message: "Unable To Delete By this ID" });
   }
   return res.status(200).json({ message: "Product Successfully Deleted" });
 }; 


exports.getData = getData;
exports.postData = postData;
exports.getById = getById;
exports.updatemobile = updatemobile;
exports.deletemobile = deletemobile;
