//import React from 'react';
import { Link } from "react-router-dom";
import pash from'../assets/Pash.jpg';
import './LastaPage.css';


function LastaPage (){

return (   
<div className="lasta-page">

    <header className="lasta-header">
         <h1> My Passion </h1>
       
      </header>

      

<section className="lasta-hero">
      <div className="lasta-img">
          <img
            src={pash}alt="pash"/>
        </div>
      </section>


      <main className="container">
        <article className="content">
          <h2>Photograph Description</h2>
          <p>
           This photograph was captured using a Samsung Galaxy S22, 
           a device known for its sharp detail and excellent dynamic range, 
           which allowed me to reveal the calm and reflective atmosphere of the moment. 
           I chose a longer focal length to achieve a soft, dreamy look—subtly 
           compressing the background while keeping the composition balanced between the subject and the surrounding landscape.

          Because the lighting was natural and gentle, I used a wide aperture to let in more light,
          maintaining brightness without losing softness. Since the image was taken handheld,
          I selected a fast enough shutter speed to avoid motion blur while preserving 
          a natural flow of light. A low ISO helped keep the image smooth, clear, and noise-free, 
          staying true to the peaceful mood of the scene.
          </p>

          <h2>Editing Specifications</h2>
          <p>
            The photograph was refined in Affinity Photo, where I focused on enhancing its dreamy and serene quality:
          </p>
           <ul style={{ lineHeight: "1.8" }}>
        <li>
          Increased exposure to brighten the subject and bring out the softer details in the sky and water.
        </li>

        <li>
          Enhanced contrast to add depth and subtly separate the figure from the environment.
        </li>

        <li>
          Boosted saturation and vibrance to highlight gentle greens, blues, and warm tones throughout the scene.
        </li>

        <li>
          Added a soft vignette to guide the viewer’s attention toward the center of the image.
        </li>
        <li>
          Applied a light Gaussian Blur / lens blur to the background to strengthen the shallow-depth-of-field effect.
        </li>
        <li>
          Selectively sharpened the subject to naturally draw the eye to the moment of reflection..
        </li>
      </ul>


          <h2>What the Picture Depicts</h2>
          <p>
            This photograph captures a calm, introspective moment in nature—an image symbolizing balance,
             self-expression, and the quiet confidence that supports my creative journey.
             Standing on a bridge overlooking flowing water and open skies, I am surrounded by
              a peaceful landscape that inspires clarity, stillness, and imagination.
          </p>
          <p>
          The soft yet bright lighting mirrors my personal philosophy: simplicity is powerful, 
          and the smallest details often tell the most meaningful stories.
           Just as I approach my drawings and designs, I aim to reflect authenticity, 
           mood, and atmosphere in everything I create.
           </p>

           <p>
            More than a visually pleasing image, this photograph is a reflection of who I am—calm, 
            observant, inspired by the world around me, and committed to turning subtle moments into visual expression.
             It represents the mindset I bring to every creative project: intentional, expressive,
             and deeply connected to the beauty found in everyday scenes.
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