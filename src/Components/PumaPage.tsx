//import React from 'react';
import { Link } from "react-router-dom";
import puma_video from'../assets/puma_video.mp4';
import './PumaPage.css';


function PumaPage (){

return (   
<div className="puma-page">

    <header className="puma-header">
         <h1>Dynamic Motion Graphics Advertisement for PUMA</h1>
        <p>
          <strong>Software Used:</strong> Adobe After Effects, Adobe Illustrator, Adobe Photoshop
          <br />
          <strong>Duration:</strong> 05 seconds &nbsp; | &nbsp;
          <strong>Project Type:</strong> Motion Design / Brand Advertisement
        </p> 
      </header>

      

<section className="hero">

        <div className="media-wrap">  
          {/*video file path or poster */}
          <video className="puma-video" controls poster="/poster.jpg">
          <source src={puma_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </section>

      <main className="container">
        <article className="content">
          <h2>Overview</h2>
          <p>
            This project involved the conception, design, and execution of a dynamic motion graphics
            advertisement for <strong>PUMA</strong>, a globally recognized sportswear and lifestyle
            brand. The goal was to create a visually compelling and high-energy motion piece that
            encapsulated PUMA’s brand ethos—performance, innovation, and youthful energy—while
            showcasing my skills in motion design, animation, typography, and visual storytelling
            using Adobe After Effects.
          </p>

          <h2>Concept Development</h2>
          <p>
            At the heart of this project was the idea of movement—not just physical motion, but the
            sense of constant progress, energy, and transformation that PUMA represents. I began by
            studying PUMA’s existing advertising language, analyzing how the brand conveys its
            message across visual platforms. PUMA’s style is bold, confident, and athletic, often
            characterized by sharp typography, contrasting colors, and kinetic compositions.
          </p>
          <p>
            To align with that aesthetic, I crafted a creative concept built around the tagline
            <em> “Forever Faster.” </em> The motion piece aimed to evoke speed, determination, and
            momentum—values that resonate deeply with the brand’s identity. Every animation, color
            transition, and visual element was designed to reinforce these qualities and build an
            immersive, energetic viewing experience.
          </p>

          <h2>Design and Pre-Production</h2>
          <p>
            Before beginning animation, I focused heavily on storyboarding and style frames. Using
            Adobe Illustrator and Photoshop, I developed a series of static frames to establish the
            visual direction, color scheme, and typographic style. The color palette drew
            inspiration from PUMA’s signature red and black, complemented by clean whites and subtle
            gradients to create contrast and visual punch.
          </p>
          <p>
            The typography played a central role in the design. I chose a bold sans-serif typeface
            that reflected strength and motion, using dynamic compositions to make the text feel
            alive. Each word was treated as a visual element, designed to move and react to the
            rhythm of the piece rather than simply appear on screen.
          </p>
          <p>
            I also designed supporting graphic elements such as streaks of motion lines, abstract
            shapes, and subtle textures that added depth and speed to the visuals. These were used
            strategically to guide the viewer’s eye and emphasize key moments of motion.
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


export default PumaPage;