import lasta from'../assets/Lasta.jpg';
import smart from'../assets/Smart.png';
import puma1 from'../assets/Puma.png';
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
            src={smart} alt="smart"/>
        </div>

        <div className="intro-text">
          <h2>Smart House Project</h2>
        
          <p>
          he 3D Automated Smart House Project was my final-year academic project that showcased a futuristic, 
          fully automated home of the 21st century. Using Maya, I created a detailed 3D visualization of a smart
          house equipped with advanced technologies for automation and convenience.
          The project involved extensive research into smart home systems and their integration into modern 
         living spaces. I designed and animated features such as automated lighting, temperature control,
         and voice-activated systems, all aimed at illustrating a seamless blend of technology and functionality.
         This project not only demonstrated my technical skills in 3D modeling and animation but also highlighted 
         my ability to conceptualize and execute innovative ideas, merging creativity with real-world applications.
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
          <h2>PUMA Project</h2>
          <p>
            For a class project, I designed a dynamic motion graphics advertisement
            for Puma using Adobe After Effects. The spot featured animated text,
           smooth transitions, and synchronized motion elements to create high-energy
           visuals that embodied the brand's identity. This project demonstrated my 
          ability to create professional-grade motion design for major brands.
          </p>
          <Link to="/puma">Know More </Link>
          
        </div>
        <div className="service-img">
          <img src={puma1} alt="puma1"/>
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
            src={lasta}alt="lasta"/>
        </div>
        <div className="service-text">
          <h2>LASTA VR Project</h2>
          <p>
            "Collaborated on an innovation VR project 'LASTA Young Creator Exhibition,' 
            where we brought images artistic paintings to life through immersive visuals 
            and substle animations. This project, showcased at Siamsa. Pushed
             the boundaries of creativity and technical skill. offering a unique experience for viewers.
              Through teamwork and artistic vision. we creafted an engaging and interactive 
              environment that highlighted the intersection of art and technology."
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