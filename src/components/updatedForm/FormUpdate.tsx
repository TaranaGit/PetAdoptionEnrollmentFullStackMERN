import axios from "axios";
import React, { useState, useEffect } from "react";
import {Form} from "react-bootstrap"
import adoptionForm from "../../models/Registry";
import { useNavigate, useParams } from "react-router";
import classes from "./updateForm.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail, MdEventAvailable, MdLocalPhone, MdOutlinePets } from "react-icons/md";
import { BsGeoAltFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";

function FormUpdate() {
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();
    const [updateData, setUpdateData] = useState<adoptionForm | null>(null);

    useEffect(() => {
        // Fetch record data based on ID
        axios.get(`http://localhost:3000/adopters/${id}`)
            .then(response => setUpdateData(response.data))
            .catch(error => console.error("Error fetching record:", error));
    }, [id]);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/adopters/${id}`, updateData);
            alert("Record updated successfully!");
            navigate("/records"); // Navigate back to the main records page
        } catch (error) {
            console.error("Error updating record:", error);
        }
    };

    if (!updateData) return <p>Loading...</p>;

    return (
        <div className={classes.formSection}>
            <h3 className={classes.header}>Update Adoption Record</h3>
            <Form className={classes.form} onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="fullname">
            <IoPersonSharp />
            <Form.Label>FullName</Form.Label>
             <Form.Control 
            type="text"  value={updateData.fullname}
            onChange={(e) => setUpdateData({ ...updateData, fullname: e.target.value })}
            required
                />
             </Form.Group>  

            <Form.Group className="mb-3" controlId="email">
            <MdEmail />
            <Form.Label>Email</Form.Label>
             <Form.Control 
            type="email"  value={updateData.email}
            onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
            required
                />
             </Form.Group> 

             <Form.Group className="mb-3" controlId="address">
           <BsGeoAltFill />
            <Form.Label>Address</Form.Label>
             <Form.Control 
            type="text"  value={updateData.address}
            onChange={(e) => setUpdateData({ ...updateData, address: e.target.value })}
            required
                />
             </Form.Group> 

             <Form.Group className="mb-3" controlId="contact">
             <MdLocalPhone />
            <Form.Label>Contact</Form.Label>
             <Form.Control 
            type="text"
            value={updateData.contact}
            onChange={(e) => setUpdateData({ ...updateData, contact: e.target.value })}
            required
                />
             </Form.Group> 

             <Form.Group className="mb-3" controlId="contact">
            <MdOutlinePets />
            <Form.Label>Preferred Pet Type</Form.Label>
             <Form.Control 
            type="text"
            value={updateData.preferredPetType}
            onChange={(e) => setUpdateData({ ...updateData, preferredPetType: e.target.value })}
            required
                />
             </Form.Group> 

             <Form.Group className="mb-3" controlId="contact">
            <FaHome />
            <Form.Label>Home Type</Form.Label>
             <Form.Control 
            type="text"
            value={updateData.homeType}
            onChange={(e) => setUpdateData({ ...updateData, homeType: e.target.value })}
            required
                />
             </Form.Group> 



             <Form.Group className="mb-3" controlId="contact">
             <MdEventAvailable />
            <Form.Label>Availability</Form.Label>
             <Form.Control 
                        type="text"
                        value={updateData.availability}
                        onChange={(e) => setUpdateData({ ...updateData, availability: e.target.value })}
                        required
                />
             </Form.Group> 

             <Form.Group className="mb-3" controlId="contact">
           
            <Form.Label>Previous Experience</Form.Label>
             <Form.Control 
                        type="text"
                        value={updateData.experience}
                        onChange={(e) => setUpdateData({ ...updateData, experience: e.target.value })}
                        required
                />
             </Form.Group> 

                 
                    <button className={classes.update} type="submit">Update</button>
                    <button className={classes.cancel}  type="button" onClick={() => navigate("/records")}>Cancel</button> 
                  
            </Form>
        </div>
    );
}

export default FormUpdate;
