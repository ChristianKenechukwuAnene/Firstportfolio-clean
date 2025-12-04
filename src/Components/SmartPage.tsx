//import React from 'react';
import { Link } from "react-router-dom";
import chris_1 from'../assets/Chris_1.jpg';
import './SmartPage.css';


function SmartPage (){

return (   
<div className="smart-page">

    <header className="smart-header">
         <h1>My Professional</h1>
       
      </header>
      

<section className="hero">
   <div className="media-wrap">  
          <img src={chris_1} alt="Chris_1"/>

        </div>
</section>

      <main className="container">
        <article className="content">
          <h2>Professional Headshot Description</h2>
          <p>
            This professional headshot reflects the mindset and values I bring to my work confidence, 
            discipline, and a commitment to excellence. Captured in a clean, formal style,
             the image presents a composed and thoughtful expression,
              mirroring the way I approach problem-solving and professional growth. 
              Wearing a tailored suit and maintaining an assured posture, 
              I aim to communicate reliability, focus, and readiness for responsibility.
          </p>

          <h2>My Professional Background</h2>
          <p>
            My experience spans creative design, mechanical engineering, and technology 
            a combination that shapes how I think, work, and collaborate.
             I value structure and clarity, yet I remain open to innovation and new ideas.
              Whether I’m analyzing a system, designing a solution, or working within a team,
               I approach every challenge with intention, purpose, and curiosity.
          </p>

          <h2>Visual Style and Representation</h2>
          <p>
            The simplicity of the backdrop keeps the focus on presence and professionalism,
             emphasizing my belief in clear communication and a strong first impression.
              This minimalistic setting reflects the balance I strive for in my work:
              pairing technical understanding with creativity, and organisation with adaptability.
          </p>
          <p>
           <h2>What This Photograph Represents</h2>
            This headshot represents the professional identity I continue to build someone who is dedicated,
             forward-thinking, and committed to continuous improvement.
              It captures the qualities I bring to every project and environment: 
              steadiness, clarity, and a drive to grow both personally and professionally.
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