const express = require("express");
const bodyParser= require("body-parser");
const cors= require("cors");
const mongoose=require("mongoose");
const bcrypt =require("bcrypt");
const app = express();
const fs=require("fs")
const port = 3000;
const sharp=require('sharp');
const multer=require("multer");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const upload=multer({dest:'images/'});
app.get('/images/:imageName',(req,res)=>{
    const imageName=req.params.imageName;
    const readStream=fs.createReadStream('images/'+imageName)
    readStream.pipe(res);
})
app.post("/api/images",upload.single('image'),async(req,res)=>{
    try {
        const imageName = req.file.filename;
        const inputPath = req.file.path;
        const outputPath = `images/${imageName}.jpeg`;
        await sharp(inputPath)
            .jpeg()
            .toFile(outputPath);
        fs.unlinkSync(inputPath);
        console.log(imageName);
        res.send(imageName);
    } catch (error) {
        console.error("Image conversion error:", error);
        res.status(500).json({ message: "Image processing failed", error: error.message });
    }

})
app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});

app.post("/register",async (req, res) => {
    try {
        const { Name, Email, Password} = req.body.contact;
        const imageName = req.body.imageName;
        const user = {
            Name,
            Email,
            Password,
            imageName
        };
         console.log(user);
         res.status(201).json({ message: "Registration successful", user });
         try{
         await main(Name, Email,Password,imageName);
         console.log("User registered successfully");
         }
         catch(error){
            console.error("Error during registration:", error); 
         }
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(400).json({ message: "Registration failed", error: error.message });
    }
});
app.post("/login",async(req,res)=>{
    try{
        const {UserId,Password}=req.body;
        const LoginInfo={
            UserId,
            Password
        };
        try{
          const details=await VerifyDetail(UserId,Password);
          if(details){
            console.log(details);
            res.status(201).json({message:"Registeration successful",Name:details.Name,imageName:details.imageName,LoginInfo})
          }
          else{
            res.status(401).json({ message: "Unauthorized" });
;
          }
        }
        catch(error){
            res.status(400);
        }
    } catch(error){
        console.error("Error during Login",error);
        res.status(400).json({message:"Login Failed",error:error.message});
    }
});
async function main(Name,Email,Password,imageName){
    await mongoose.connect("mongodb://127.0.0.1:27017/Info");
    const hashedPassword=await bcrypt.hash(Password,10);
    const user = new Userobject({
        Name: Name,
        Email: Email,
        Password: hashedPassword,
        imageName:imageName,
      });
      await user.save();
}
const UserDataSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    imageName:String,
})
const Userobject = mongoose.model("users", UserDataSchema);
async function VerifyDetail(UserId,Password){
    await mongoose.connect("mongodb://127.0.0.1:27017/Info");
    console.log(UserId);
    const details=await Userobject.findOne({Email:UserId});
    console.log(details);
    if(details){
        const passMatch=await bcrypt.compare(Password, details.Password);
        if(passMatch){
            return details;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}