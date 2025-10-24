//import React from 'react';
import { Link } from "react-router-dom";
//import smart_video from'../assets/smart_video.mp4';
import './SmartPage.css';


function SmartPage (){

return (   
<div className="smart-page">

    <header className="smart-header">
         <h1>3D Smart House Project Design</h1>
        <p>
          <strong>Software Used:</strong> Autodesk Maya, Adobe Photoshop, After Effects.
          <br />
          <strong>Duration:</strong> 4:00 minuts &nbsp; | &nbsp;
          <strong>Project Type:</strong> 3D Visualization / Animation / Academic Final-Year Project
        </p>
      </header>
      

<section className="hero">

        <div className="media-wrap">  
          {/*video file path or poster */}
          <video className="smart-video" controls poster="/poster.mp4">
          <video src="/smart_video.mp4" controls autoPlay muted loop />
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

      <main className="container">
        <article className="content">
          <h2>Overview</h2>
          <p>
            The 3D Automated Smart House Project was my final-year academic project,
           aimed at exploring the concept of a fully automated, futuristic home designed
           for the 21st century. The project focused on visualizing a technologically
           advanced living environment where automation and convenience seamlessly
           enhance the quality of daily life. Through this project, I sought to
           demonstrate how modern design principles and innovative technologies 
           can be integrated into residential spaces, creating a home that is both
           functional and aesthetically striking

           The goal was not only to produce a visually compelling 3D model but also to 
           communicate how emerging smart home technologies can transform traditional 
           living spaces into interactive, intuitive environments. The project presented
            an opportunity to combine my technical proficiency in 3D modeling and 
            animation with my creative vision for futuristic architecture and user-centric 
            design.
          </p>

          <h2>Concept Development</h2>
          <p>
            At the heart of the project was the idea of a self-sufficient, intelligent home
             capable of responding to the needs and preferences of its residents. 
             To conceptualize the smart house, I conducted extensive research into
             contemporary smart home systems, including automated lighting, climate 
             control, security systems, energy-efficient technologies, and voice-activated 
             devices.

             <h4>Lighting systems:</h4>adjust automatically according to natural light levels and user activity.
             <h4>Temperature and climate control: </h4>maintain comfort while optimizing energy consumption.
             <h4>Voice-activated devices: </h4> allow users to control appliances, lighting, and multimedia systems effortlessly.

          </p>
          <p>
            I also explored aesthetic design principles to ensure the house
             felt modern and futuristic, blending cutting-edge technology 
             with elegant architectural design.
          </p>

          <h2>Design and 3D Modeling</h2>
          <p>
            Using Autodesk Maya, I created a highly detailed 3D model of the house,
             focusing on both the exterior architecture and interior spaces.
              The modeling process included:
          </p>
          <p>
           <h4>Structural Design:</h4>
            Developed the main architectural layout including living areas, bedrooms, kitchen, and common spaces.
            Designed clean, minimalist lines and modern materials to reflect a futuristic aesthetic. 
          </p>
          <p>
           <h4>Interior Elements:</h4>
          Modeled furniture, appliances, and interactive devices in precise scale to demonstrate realistic spatial planning.
          Incorporated smart features such as touch panels, motion sensors, and automated furniture.
          </p>
           <p>    
          <h4>Automation Features:</h4>
          Animated doors, blinds, and lighting to demonstrate automated operation.
          Simulated user interactions such as adjusting lighting intensity or activating systems via voice commands.
          Created temperature control visualizations showing how the home adapts to external and internal conditions.
          </p>
        </article>
      </main>

<Link className="back" to="/Projects">← Back to Projects</Link>


{/* CTA Section */}  
      <section className="cta">
        <div className="cta-text">
          <h2>Let’s work together on your next project</h2>
            <p className="italic-text">“Great projects start with a conversation. Let’s team up and turn your vision into reality.”
          </p>
           <h4>&copy; {new Date().getFullYear()} christian Anene. <span className="Rights">All Rights Reserved.</span></h4> {/* copy right year */ }
        </div> 
      </section> 
</div>
);
};


export default SmartPage;