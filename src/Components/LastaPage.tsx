//import React from 'react';
import { Link } from "react-router-dom";
import lasta from'../assets/Lasta.jpg';
import artiviveImage from "../assets/ArtiviveImage.png";
import './LastaPage.css';


function LastaPage (){

return (   
<div className="lasta-page">

    <header className="lasta-header">
         <h1>LASTA Young Creator Exhibition – VR/AR Project</h1>
        <p>
          <strong>Software Used:</strong> Artivive App, Adobe After Effects, Photoshop, 3D/Animation Tools
          <br />
          <strong>Venue:</strong> Siamsa Arts Center &nbsp;
          <br />
          <strong>Project Type:</strong> Immersive Art & VR/AR Experience
        </p> 
      </header>

      

<section className="lasta-hero">
      <div className="lasta-img">
          <img
            src={lasta}alt="lasta"/>
        </div>
      </section>

        <div className="artivive-link-container">
      <a
        href="https://apps.apple.com/app/artivive/id1260281712"target="_blank" rel="noopener noreferrer">
        <img
          src={artiviveImage} alt="Scan with Artivive App"className="artivive-image" />
      </a>
      </div>

      <main className="container">
        <article className="content">
          <h2>Overview</h2>
          <p>
            I collaborated on an innovative VR/AR project for the “LASTA Young Creator Exhibition,” 
            an exhibition that sought to merge traditional artistic expression with
             emerging immersive technologies. The goal of the project was to bring static
              artistic paintings to life, transforming 2D visual art into dynamic,
               interactive experiences that viewers could explore through the Artivive app.

            This project pushed the boundaries of creativity and technical skill, 
            combining artistic vision with digital interactivity to create an entirely 
            new form of engagement with visual art.
          </p>

          <h2>Concept Development</h2>
          <p>
            The central idea of the project was to animate static paintings and provide 
            viewers with an immersive layer of digital content that enhances the original artwork.
             Using AR technology:
             <h5>Visitors could scan artworks with the Artivive app on their devices.</h5>
             <h5>Hidden animations, subtle movements, and visual effects appeared seamlessly
               over the original painting, creating a sense of life and motion.</h5>
              <h5>Sound design or subtle visual cues were incorporated to enhance emotional impact and immersion.</h5>
          </p>
          <p>
            The project explored the intersection of art and technology,
             demonstrating how digital tools can enrich traditional forms of 
             creative expression. It also aimed to make art more interactive and
              engaging for a younger, tech-savvy audience.
          </p>

          <h2>Impact and Experience</h2>
          <p>
            The final exhibition allowed viewers to experience paintings in a completely new 
            dimension: what was once static became interactive, immersive, and engaging.
             Visitors could move around the space, explore each piece with their mobile devices,
              and experience art in a dynamic way.
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


export default LastaPage;