import { Table, Button } from "react-bootstrap";
import { useAdoption } from "../AdoptionContext";
import axios from "axios";
import { useEffect, useState } from "react";
import adoptionForm from "../../models/Registry";
import { BsPencilSquare, BsTrash } from "react-icons/bs"; 
import { PiPencilBold } from "react-icons/pi";
import { TfiPencilAlt } from "react-icons/tfi";
import classes from './recors.module.css';

import { useNavigate } from "react-router";

function Records() {

  //.......Fetch Data from Backend
  const navigate = useNavigate();
  const[adopt, setAdopt] = useState<adoptionForm[]>([]);
  useEffect(()=>{
    fetchRecords();
  }, []);

   const fetchRecords = async()=>{
    try{
      const response = await axios.get("http://localhost:3000/adopters");
      console.log("Fetched records:", response.data); // Debugging step
      setAdopt(response.data);
    }
    catch(error){
      console.log("Fetching data error:",error);
    }
  }

//........delete an entry
const handleDelete = async(_id: string | undefined)=>{
  if(!_id){
    console.log("ID is undefined, can not delete")
    return;
  }
  try{
    console.log("Deleting ID:", _id); // Debugging step
    await axios.delete(`http://localhost:3000/adopters/${_id}`);
    fetchRecords();
  }
  catch (error) {
    console.error("Error deleting record:", error);
  }
}


  return (
    <div className="container mt-4">
      <h2 className={classes.head2}>Adoption Records</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Pet</th>
            <th>Home Type</th>
            <th>Availability</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adopt.map((eachEntry, index) => (
            // <tr key={index}>
             <tr key={eachEntry._id}>
              <td>{index + 1}</td>
              <td>{eachEntry.fullname}</td>
              <td>{eachEntry.address}</td>
              <td>{eachEntry.contact}</td>
              <td>{eachEntry.email}</td>
              <td>{eachEntry.preferredPetType}</td>
              <td>{eachEntry.homeType}</td>
              <td>{eachEntry.availability}</td>
              <td>{eachEntry.experience}</td>

              <td className={classes.actions}>
                <button  
                onClick={() => navigate(`/update/${eachEntry._id}`)}
                // onClick={()=>handleUpdate(eachEntry._id)}
                className={classes.updateBtn}>
                <TfiPencilAlt />
                </button>
          
                <button onClick={() => handleDelete(eachEntry._id)}
                className={classes.deleteBtn}>
                <BsTrash />
                </button>              
            </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
}

export default Records;
