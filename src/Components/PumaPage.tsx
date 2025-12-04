//import React from 'react';
import { Link } from "react-router-dom";
import bash from'../assets/Bash.jpg';
import './PumaPage.css';


function PumaPage (){

return (   
<div className="puma-page">

    <header className="puma-header">
         <h1>Aesthetic shot</h1>
      </header>

      

<section className="hero">

        <div className="media-wrap">  
          <img src={bash} alt="Bash"/>

        </div>
      </section>

      <main className="container">
        <article className="content">
          <h2>Photograph Description</h2>
          <p>
            This photograph was captured using a Samsung Galaxy S22, a device
            known for its sharp detail and excellent dynamic range, which allowed 
            me to beautifully capture the calm and reflective atmosphere of the moment.
            I chose a longer focal length to create a soft, dreamy look—compressing the
           background slightly while keeping the composition balanced with both the environment and the subject in harmony.

           Because the lighting was natural and gentle, I kept the aperture wide to let more 
           light into the camera, ensuring the scene remained bright and clear without losing its softness. 
           Using a handheld shot, I selected a shutter speed fast enough to avoid motion blur while still 
           maintaining a natural flow of light. The low ISO helped keep the image smooth and noise-free,
            preserving the peaceful mood of the scene.
          </p>


          <h2>Editing Specifications</h2>
          <p>
           The image was later refined in Affinity Photo, where I focused on enhancing the dreamy,
           calm quality of the photograph.
          </p>
          <ul style={{ lineHeight: "1.8" }}>
        <li>
          Increased exposure slightly to brighten the subject and give life to the softer areas of the sky and water.
        </li>

        <li>
          Enhanced contrast to add depth and make the figure stand out gently against the natural surroundings.
        </li>

        <li>
          Boosted saturation/vibrance to bring out the subtle greens, blues, and warm tones present in the environment.
        </li>

        <li>
          Added a soft vignette to draw attention toward the center and create a quiet sense of focus.
        </li>
        <li>
          Applied a gentle Gaussian Blur / lens blur to the background to heighten the serene, shallow-depth-of-field effect.
        </li>
        <li>
          Applied a gentle Gaussian Blur / lens blur to the background to heighten the serene, shallow-depth-of-field effect.
        </li>
      </ul>

          <h2>What the Picture Depicts</h2>
          <p>
            This photograph captures a calm, reflective moment in nature—an image that symbolizes balance,
             self-expression, and the quiet confidence that guides my creative journey. 
             Standing on a bridge overlooking flowing water and open skies, 
             I am surrounded by a peaceful landscape that encourages clarity, stillness, and imagination.
          </p>
          <p>
            The soft yet bright lighting mirrors my personal philosophy: simplicity can be powerful,
             and the smallest details often tell the most meaningful stories. 
             Just like in my drawings and designs, I try to capture authenticity, 
             mood, and atmosphere in everything I create.
          </p>
          <p>
            This picture is more than a visually appealing shot; it is a reflection
             of who I am as both an artist and a person. Calm, observant, and inspired by 
             the world around me, I aim to transform quiet moments into visual expression. 
             This image represents the mindset I bring to every creative project intentional,
              expressive, and deeply connected to the beauty found in everyday scenes.
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