import { Button, Form, Row,Col,Image, Container } from "react-bootstrap";
import petName from "../constant/petType";
import { useState } from "react";
import adoptionForm from "../models/Registry";
import { useAdoption } from "./AdoptionContext";
import firstImage from "../assets/first.webp"
import secondImage from "../assets/second.webp"
//bootstrap icon
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import classes from "./Enrollment.module.css"
import axios from "axios";

function EnrollmentForm(){
    const { addInformation } = useAdoption();
    //Logical code
    const [petRegistry, setpetRegistry] = useState<adoptionForm>({
        fullname:"",
        email:"",
        address:"",
        contact:"",
        preferredPetType:"",
        homeType:"",
        availability:"",
        experience:""
    });

      const[loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");


    const submitHandler = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addInformation(petRegistry); // Add data to context
        // console.log(petRegistry);
        setLoading(true);
        setMessage("");

        try{
          const response = await axios.post("http://localhost:3000/adopters", {
            fullname: petRegistry.fullname,  
            email: petRegistry.email,
            address: petRegistry.address,
            contact: petRegistry.contact,  
            preferredPetType: petRegistry.preferredPetType,  
            homeType: petRegistry.homeType,
            availability: petRegistry.availability,
            experience: petRegistry.experience
          });
          console.log("Success:", response.data);
          setMessage("Registration Successful!");
                // Optionally reset the form
      setpetRegistry({
        fullname: "",
        email: "",
        address: "",
        contact: "",
        preferredPetType: "",
        homeType: "",
        availability: "",
        experience: "",
      });

        }
        catch(err){
          console.log("Error:", err);
          setMessage("Error submitting form. Please try again");
        }
        finally{
          setLoading(false);
        }
        
    }

    //UI code

    return(
    <div className={classes.page}>
  {/* Left Side (Images) */}
  <div className={classes.imageSection}>
    <img src={firstImage} alt="Adopt a Pet" className={classes.image} />
   
    {/* <img src={secondImage} alt="Happy Pets" className={classes.image} /> */}
  </div>


  {/* Right Side (Form) */}
  <div className={classes.formSection}>
    {/* <h2>Adoption Form </h2> */}
  <Form className={classes.form} onSubmit={submitHandler}>
         
         <Form.Group className="mb-3" controlId="fullname">
         <IoPersonSharp />
         <Form.Label>FullName</Form.Label>
         <Form.Control 
         required
         type="text" placeholder="Enter full name" value={petRegistry.fullname}
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, fullname:e.target.value}))}
         />
         </Form.Group>   
 
         <Form.Group className="mb-3" controlId="email">
         <MdEmail />
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" placeholder="Enter email" value={petRegistry.email}
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, email:e.target.value}))}
         />
         </Form.Group>
             
         <Form.Group className="mb-3" controlId="address">
         <BsGeoAltFill />
         <Form.Label>Address</Form.Label>
         <Form.Control type="text" placeholder="Enter address"  value={petRegistry.address}
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, address:e.target.value}))}
         />
         </Form.Group>
 
         <Form.Group className="mb-3" controlId="contact">
         <MdLocalPhone />
         <Form.Label> Contact number</Form.Label>
         <Form.Control type="text" placeholder="Enter contact Number" value={petRegistry.contact}
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, contact:e.target.value}))}
         />
         </Form.Group>
         
 
         <Form.Group className="mb-3" controlId="preferredPetType">
         <MdOutlinePets />
         <Form.Label>Preferred Pet Type</Form.Label>
         <Form.Select aria-label="Default select example"
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, preferredPetType:e.target.value}))}
         value={petRegistry.preferredPetType}>
          {petName.map((petName, index)=>(
         <option key={index}>{petName}</option>
         ))}
         </Form.Select>
         </Form.Group>
 
         <Form.Group className="mb-3" controlId="homeType">
         <FaHome />
         <Form.Label>Home Type</Form.Label>
         <Form.Select aria-label="Default select example"
         value={petRegistry.homeType}
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, homeType:e.target.value}))}
          >
         <option>Apartment</option>
         <option>House</option>
         <option>Farm</option>
         </Form.Select>
         </Form.Group>
 
         <Form.Group className="mb-3" controlId="availability">
         <MdEventAvailable />
         <Form.Label>Availability for Pet Care</Form.Label>
         <Form.Select aria-label="Default select example"
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, availability:e.target.value}))}
          value={petRegistry.availability}
         >
         <option>Full-Time</option>
         <option>Part-Time</option>
         </Form.Select>
         </Form.Group>
 
         <Form.Group className="mb-3" controlId="experience">
         <Form.Label>Previous Pet Ownership Experience</Form.Label>
         <Form.Control as="textarea" rows={3} 
         placeholder="Describe your previous pet ownership experience" 
         onChange={(e)=>setpetRegistry((prevState)=>({...prevState, experience:e.target.value}))}
         />
         </Form.Group>
 
         <Button className={classes.btn} type="submit">
         {loading? "Submitting" :"Complete Registration"}
         </Button>

         {message && <p className={loading? classes.loadingText : classes.message}> {message}</p>}
     </Form> 
       
  </div>
      

        </div>
    )
}
export default EnrollmentForm;