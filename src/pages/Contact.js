import React, { Component } from "react";
import Wrapper from "../components/Wrapper/index";
import Nav from "../components/Nav/index";
import Card from "../components/Card/index";
import Footer from "../components/Footer/index"; 

function Contact() {
  return (
     <div>   
     <Nav />
      <Wrapper>
      <Card>

      <h5 class="card-header" id = "Contact" >Julia Frances Horan</h5>

        <p class="card-text"></p>

         <ul class="list-unstyled" /> 
        <li> Phone: 908-489-7803</li>
        <li> Email: Julia.horan28@gmail.com </li>
        <li> <a href = "https://www.linkedin.com/in/juliafhoran/" > Linkedin </a></li>
        <li> <a href = "https://github.com/Juliafrances28"> github </a></li>
       <ul /> 

         <h5 class="card-title"> I look forward to hearing from you!!</h5>
         
    <img
    src="https://www.eu-startups.com/wp-content/uploads/2020/06/woman-coding.jpg"
    width="50%;" />

      </Card>
      </Wrapper>
      <Footer />
    
  );
  
  }; 

  

export default Contact; 
