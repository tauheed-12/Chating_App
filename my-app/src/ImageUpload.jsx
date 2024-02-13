import { useState ,useEffect} from "react";
import axios from "axios";
export default function ImageUpload({imageName ,setImageName}){
  const [file,setFile]=useState();
  const submit =async event=>{
    event.preventDefault()

    const formData=new FormData()
    formData.append("image",file)
    try{
    const result=await axios.post('http://localhost:3000/api/images',formData,{headers:{'Content-Type':'multipart/form-data'}}) 
    setImageName(result.data);
    }
    catch(error){
      console.error(error);
    }
  }
  useEffect(() => {
    console.log(imageName);
  }, [imageName]);
  return(
    <div>
    <form onSubmit={submit}>
       <input name="file" type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])}></input>
       <button type="submit">Upload</button>
    </form>
    </div>
  )
}