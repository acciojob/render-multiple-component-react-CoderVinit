import React, {Component, useState} from "react";
import '../styles/App.css';
import Project from "./Project";


const projects = [
  { name: "ChatApp", description: "A real-time chat application using Socket.io." },
  { name: "Doctor Appointment App", description: "An app for booking and managing doctor appointments." },
  { name: "Shopping Cart", description: "An e-commerce shopping cart with Razorpay integration." }
];

const App = () => {

  return (
    <div id="ns-wrapper">
      {
        projects?.map((project,index)=>(
          <Project key={index} name={project.name} description={project.description}/>
        ))
      }
    </div>
  )
}


export default App;
