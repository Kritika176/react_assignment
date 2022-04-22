import { useState } from "react";
import "./Create.css";
import axios from "axios";
export const Create = () => {

    const [data,setData] = useState({
         name:"",
         city:"",
        address:"",
        capacity:"",
        cost_per_day:"",
        verification:"",
        rating:"",
        summary:"",
        type_of_pet:"",
        size_of_pet:"",
        level_of_adult_supervision:"",
        place_of_pet_unsupervised:"",
        potty_breaks:"",
        number_of_walks:"",
        home_type:"",
        outdoor_size:"",
        emergency_transport:"",
})

 const createData = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value)
      setData({
          ...data,[name]:value
      })
 }
 const handleSubmit = (e) => {
   e.preventDefault();
   axios.post((" http://localhost:3000/data"),data).then((res) =>{
       console.log(res.data)
   }).catch((err) => {
       console.log(err)
   })
 }
 console.log(data)
return(
    <div  className="container">
     <form onSubmit={handleSubmit}>
        <input type={"text"} placeholder="Name of place" name="name" onChange={createData}></input> <br></br>
        <input type={"text"} placeholder="City" name="city" onChange={createData}></input><br></br>
        <input type={"text"} placeholder="Address" name="address" onChange={createData}></input><br></br>
        <input type={"number"} placeholder="Capacity" name="capacity" onChange={createData}></input><br></br>
        <input type={"number"} placeholder="Cost Per Day" name="cost_per_day" onChange={createData}></input><br></br>
      
        <select name="verification" value={data.verification} onChange={createData}>
             <option value="nothing">Select verification</option>
            <option value="verified">Verified</option>
            <option value="not verified">Not-verified</option>
        </select><br></br>
        <input type = "number" name="rating" placeholder="Rating" onChange={createData}></input><br></br>
        <textarea type={"text"} name="summary" placeholder="Summary" onChange={createData} className="setSize setHeight"></textarea><br></br>
        <select value={data.type_of_pet} name="type_of_pet" onChange={createData}>
            <option>Type Of Pet</option>
            <option value={'Dog'}>Dog</option>
            <option value={'Cat'}>Cat</option>
            <option value={"Rabbit"}>Rabbit</option>
        </select><br></br>
      
        <select value={data.size_of_pet} name="size_of_pet" placeholder="Accepted pet size" onChange={createData}>
            <option>Size of Pet</option>
            <option value={'1-5Kg'}>1-5Kg</option>
            <option value={'5-10Kg'}>5-10Kg</option>
            <option value={"10-20Kg"}>10-20Kg</option>
            <option value={"20-40Kg"}>20-40Kg</option>
            <option value={"40+Kg"}>40+Kg</option>
          
        </select><br></br>
        <input type={"text"}  placeholder="Level of adult supervision" className="setSize" name="level_of_adult_supervision" onChange={createData}></input><br></br>
        <input type={"text"}  placeholder="The place were pets will be if they are left unsupervised" className="setSize" name="place_of_pet_unsupervised" onChange={createData}></input><br></br>
        <input type={"text"} placeholder="Pets sleeping place at night" className="setSize" name="size" onChange={createData}></input><br></br>
        <input type={"text"} placeholder="No of potty-breaks" className="setSize" name="potty_breaks" onChange={createData}></input><br></br>
        <input type={"number"} placeholder="No of walks" className="setSize" name="number_of_walks" onChange={createData}></input><br></br>
       
        <input type={"text"} placeholder="Type of home" name="home_type" onChange={createData}></input><br></br>
        <select value={""} name="outdoor_size" placeholder="Outdoor area-size" onChange={createData}  >
            <option>Select outdoor-area size</option>
            <option value={"small"}>Small</option>
            <option value={'large'}>Large</option>
            <option value={"medium"}>Medium</option>
        </select><br></br>
        <select value={""} placeholder="Emergency Transport" name={"emergency_transport"} onChange={createData}>
            <option>Select emergency transport availability</option>
            <option value={"Yes"}>Yes</option>
            <option value={'No'}>No</option>
            
        </select>
        <br></br>
        <input type={"submit"}></input>
     </form>

    </div>
   
 )   
}