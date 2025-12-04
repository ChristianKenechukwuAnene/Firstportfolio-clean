import bash from'../assets/Bash.jpg';
import chris_1 from'../assets/Chris_1.jpg';
import pash from'../assets/Pash.jpg';
import Photo1 from'../assets/Photo.jpg';
import { Link } from "react-router-dom";
import './Projects.css'; // Import the CSS file



function Projects(){
  {/*This defines a React functional component named Projects.
     Everything inside the return() block is what will be displayed on your Projects page.*/}

    return(

      <div className="my-projects">
      {/* Hero Section */}

       <header className="projects-header">
        <h1>PROJECTS</h1>
       
      </header>

      {/*Image (intro-img) — displays a preview image (smart) of my Smart House Project.
        Text (intro-text) — gives a detailed description of what the project is about.
        The text explains how i created a 3D Automated Smart House using Maya, focusing on automation, animation, and user-centered design.
        <Link to="/smart"> — a React Router link that navigates to a dedicated page (probably /smart) where visitors can learn more about that specific project. */}

      {/* Hero Section */}
      <div className="projects-container">


      {/* Why Choose Us Section */}
      <section className="projects-intro">
        <div className="intro-img">
          <img
            src={chris_1} alt="chris_1"/>
        </div>

        <div className="intro-text">
          <h2>Professional Headshot</h2>
        
          <p>
          This professional headshot reflects the mindset and values I bring to my work confidence, 
          discipline, and a commitment to excellence. Captured in a clean, formal style, 
          the image presents a composed and thoughtful expression, mirroring the way I approach
           problem-solving and professional growth. Wearing a tailored suit and maintaining an assured posture,
            I aim to communicate reliability, focus, and readiness for responsibility.
          </p>
          <Link to="/smart"> Know More </Link>
        </div>
      </section>

      {/*This section presents my PUMA Motion Graphics Advertisement.
          my describe how i used Adobe After Effects to design high-energy, brand-consistent motion graphics.
          The layout uses .service for styling — likely displaying the text on the left and image on the right.
          The Link again takes visitors to the detailed /puma project page. */}

      {/* Service 1 */}
      <section className="service">
        <div className="service-text">
          <h2>Aesthetic shot</h2>
          <p>
            This photograph was captured using a Samsung Galaxy S22, a device known for its sharp detail and excellent dynamic range, 
            which allowed me to beautifully capture the calm and reflective atmosphere of the moment. 
            I chose a longer focal length to create a soft, dreamy look—compressing the background slightly
            while keeping the composition balanced with both the environment and the subject in harmony.
             Because the lighting was natural and gentle, I kept the aperture wide to let more light into the camera,
              ensuring the scene remained bright and clear without losing its softness. Using a handheld shot, 
              I selected a shutter speed fast enough to avoid motion blur while still maintaining a natural flow of light.
               The low ISO helped keep the image smooth and noise-free, preserving the peaceful mood of the scene.
          </p>
          <Link to="/puma">Know More </Link>
          
        </div>
        <div className="service-img">
          <img src={bash} alt="Bash"/>
        </div>
      </section>
      {/** The reverse class likely flips the layout (image on left, text on right) for a staggered visual pattern.
           Describes my collaborative VR exhibition project called LASTA Young Creator Exhibition.
           Focuses on how i combined art and technology to create an immersive experience.
           The “Know More” link navigates to /Lasta for a dedicated page.*/}

      {/* Service 2 */}
      <section className="service reverse">
        <div className="service-img">
          <img
            src={pash}alt="Pash"/>
        </div>
        <div className="service-text">
          <h2>My Passion</h2>
          <p>
            This photograph was captured using a Samsung Galaxy S22, a device known for its sharp
             detail and excellent dynamic range, which allowed me to reveal the calm and reflective atmosphere of the moment. 
             I chose a longer focal length to achieve a soft, dreamy look—subtly compressing the background while keeping the
              composition balanced between the subject and the surrounding landscape. Because the lighting was natural and gentle, 
              I used a wide aperture to let in more light, maintaining brightness without losing softness.
               Since the image was taken handheld, I selected a fast enough shutter speed to avoid motion blur 
               while preserving a natural flow of light. A low ISO helped keep the image smooth, clear,
                and noise-free, staying true to the peaceful mood of the scene.
          </p>
           <Link to="/Lasta">Know More</Link>
        </div>
      </section>

      {/*this section Describes my photography course experience during your Animation studies.
         Focuses on my training in composition, lighting, and storytelling.
         The “Know More” link leads to a /photo page for further detail.
         Again uses .service layout — text + image side by side. */}

      {/* Service 3 */}
      <section className="service">
        <div className="service-text">
          <h2>Photography</h2>
          <p>
           During my Animation undergraduate studies, I completed a dedicated photography course.
            This training honed my skills in composition, lighting, and visual 
            storytelling using DSLR cameras. It enhanced my artistic eye and provided a 
            strong foundation in capturing compelling imagery, directly complementing my 
            work in digital design and animation.  
             </p>
             <Link to="/photo">Know More </Link>
        </div>
        <div className="service-img">
          <img
            src={Photo1} alt="photo1"/>
        </div>
      </section>
      </div>

      {/* Encourages collaboration (“Let’s work together…”).
              Uses new Date().getFullYear() to auto-update the copyright year.
              Good SEO + professional feel*/}

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

export default Projects;