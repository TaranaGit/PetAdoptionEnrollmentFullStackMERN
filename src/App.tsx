import { useState } from "react";
import EnrollmentForm from "./components/EnrollmentForm"
import adoptionForm from "./models/Registry";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { AdoptionProvider, useAdoption } from "./components/AdoptionContext";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Nab from "./components/navbar/Nab";
import Records from "./components/records/Records";

import FormUpdate from "./components/updatedForm/FormUpdate";


function App() {

  return (
    <AdoptionProvider>
      <Container className="container">
        {/* <h1>Home page</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Nab/>}/>
          <Route path="/register" element={<EnrollmentForm/>}/>
          <Route path="/records" element={<Records/>}/>
          <Route path="/update/:id" element={<FormUpdate/>}/>
          
        </Routes>
      </Router>
      </Container>
    </AdoptionProvider>   
  )
}
// Separate component to display adoption list



export default App
