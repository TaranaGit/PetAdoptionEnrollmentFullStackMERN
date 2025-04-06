# 🐶 PetAdoptionEnrollment-FullStackNodeReact

A full-stack web application built with **React + TypeScript** on the frontend and **Node.js + Express + MongoDB** on the backend, designed to manage pet adoption registrations efficiently.

---

## 🌟 Features 
- 🐾 A welcoming **Home Page** with a responsive **navbar** for easy navigation.
- 📝 A **pop-up registration form** where users can enter their details such as name, address, contact info, and pet ownership experience.
- 📋 An **Admin Record Page** that displays all registrations and allows easy management of records.
- ✏️ **Update functionality**: Edit existing entries via a pre-filled form, updating only the necessary fields.
- ❌ **Delete functionality**: Remove unwanted or incorrect entries directly from the admin dashboard.
- 💾 All data is stored and retrieved from a **MongoDB NoSQL database**.
- 🔄 Real-time updates and synchronization between frontend and backend using **Axios**.

---

## ⚙️ Technologies Used

### 🔹 Frontend / UI

- **React + TypeScript**  
  Type-safe, component-based frontend structure that improves maintainability and clarity.

- **React Bootstrap**  
  Makes UI design easy and responsive with pre-styled components.

- **Context API**  
  Enables efficient data sharing across components without prop drilling.

- **CSS Modules**  
  Keeps styles scoped and organized for each component, improving maintainability.

- **Axios**  
  Facilitates seamless communication with the backend using HTTP requests.

- **React Hooks** (`useState`, `useEffect`, `useNavigate`)  
  Used for state management, lifecycle handling, and navigation.

### 🔹 Backend / Server

- **Node.js + Express.js**  
  Handles RESTful API creation with routing, middleware, and controller logic.

- **MongoDB + Mongoose**  
  Stores and manages data in a flexible schema using a NoSQL approach. Mongoose helps define structure and validation.

- **CORS Middleware**  
  Enables secure and controlled communication between the frontend and backend servers.

- **Body-Parser**  
  Parses incoming request bodies for access to submitted data in a structured format.

- **Express Router & Async/Await**  
  Improves modularity of routes and handles asynchronous database operations cleanly.

---

## 🔧 Prerequisites

- Node.js and npm/yarn installed  
- MongoDB running locally or via cloud (e.g., MongoDB Atlas)  
- React and TypeScript environment setup  
- Internet connection for API dependencies

---
## 📦 Installation

1. **Clone the Repository**

   ```bash
   git clone git@github.com:TaranaGit/PetAdoptionEnrollmentFullStackMERN.git
   ```
2.  **Navigate to the project directory**
    ```bash
     cd PetAdoptionEnrollmentFullStackMERN
    ```
3. **Install dependencies**
    ```bash
    npm install
    ```
4. **Start the UI application**
    ```bash
    npm run dev 
    ```       
5. **Start the Backend Server**
    ```bash
    npm run start 
--- 

## 📘 Learning Points

- Building a fully functional **full-stack web app** using modern JavaScript frameworks.
- Handling **dynamic form inputs** and managing state efficiently.
- Performing **CRUD operations** using Mongoose and MongoDB.
- Implementing **data fetching, error handling**, and API integration with Axios.
- Creating a **modular and maintainable codebase** using CSS Modules and Context API.
- Enhancing UX with **form popups**, **pre-filled data for edits**, and **real-time updates**.


---
## 🖥️ Screenshots

![Student Registration Form](image/d)
![Student Registration Form](image/dis2.png)
> 🚀 This project is a great demonstration of full-stack development skills using modern JavaScript technologies. Perfect for showcasing CRUD operations, REST API handling, and dynamic UI interactions in a real-world use case.
