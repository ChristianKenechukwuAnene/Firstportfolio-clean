/**MY IMPORT SECTION..... import all the images you use on the homepage — React treats these as static assets.
                          You import Link from react-router-dom to navigate between pages (e.g., /projects).
                          The CSS file App.css styles the layout, colors, and animations. **/



import keecee from '../assets/Keecee.png';                                    
import chris from '../assets/Chris.png';
import lasta from'../assets/LASTA.jpg';
import smart_2 from'../assets/Smart.png';
import puma from'../assets/Puma.png';
import Photo from'../assets/Photo.jpg';
import { Link } from 'react-router-dom';


import '../App.css'; 




/*MY HERO ....Displays my name, role, and skills tags.
              Shows my portrait (chris.png) beside the text.
              Gives a strong “personal brand” introduction */



function Home() {
  return (
        <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <h2>
            I'm <span className="highlight">Christian Anene</span>
          </h2>
          <h3 className="typewriter"> 
          <span className="typewriter-text">"UX/UI & Motion Designer"</span>
          </h3>
          <div className="tags">
            <span>Web Developer</span>
            <span>Designer</span>
            <span>3D</span>
          </div>
        </div>
        <div className="chris">
          <img src={chris} alt="chris" />
        </div>
      </section>


      

    {/* ABOUT SECTION.... Introduces you and your design philosophy.
                          about_header likely centers the section and adds padding. */ }
      <section  className="about">
        <div className="about_header">
        <h3>ABOUT ME</h3>
        <p className="about-intro">
          A UX/UI and Motion Designer focused on building engaging, user-centric digital products.<br/> 
          I leverage expertise in animation and motion graphics to design intuitive interfaces <br/>
          where every interaction is informed by usability <br/>and enhanced by purposeful motion.
          </p>



        {/*Opens your resume (resume.pdf) in a new tab.
                       Also provides a download option.
                       So users can either view or save it. */}

          <div>
          <button className="resume">
          {/* Opens PDF in new tab */}
         <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn view" > 
        </a> 
         {/* Forces a download (most desktop browsers respect this) */}
        <a href="/resume.pdf" download className="resume-btn download">
          Download Resume
        </a> 
          </button>
        </div>



       {/*Displays your profile photo and personal details.
                       .Email class makes your email text red (as defined in CSS earlier).
                        Great for quick contact info. */}

        </div>
        <div className="about-content">
          {/* Profile Box */}
          <div className="profile-box">

            <div className="profile-pic">
              <img src={keecee} alt="keecee"/>
           </div>

            <div className="profile-info">
              <p><strong>FullName:</strong> Christian Kenechukwu Anene</p>
              <p><strong>Birthday:</strong> 25 March 1996</p>
              <p><strong>Phone:</strong> +353 877065986</p>
              <p><strong>Email:</strong><span className="Email"><em>keecee_a@yahoo.com</em></span></p>
            </div>
          </div>  
      
             {/*Shows your skills with progress bars.
                       Inline styles like style={{ width: "90%" }} visually represent your proficiency.
                       Each .skill likely styled as a horizontal bar in CSS. */}



     {/* Skills */}
          <div className="skills">
            <h4>Skills</h4>
            <div className="skill">
              <span>MAYA 3D</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "90%" }}>90%</div>
              </div>
            </div>
            <div className="skill">
              <span>Adobe Creative Suite</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "95%" }}>95%</div>
              </div>
            </div>
            <div className="skill">
              <span>WordPress</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}>85%</div>
              </div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress">
                <div className="progress-bar" style={{ width: "75%" }}>75%</div>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Displays 4 featured projects in a grid.
                Each card has:
                A thumbnail,
                A title,        
                A “Know More” link (these can later route to dedicated project pages like /projects/lasta).*/}


{/*  Projects Section */}
      <section className="main-projects">
        <div className="main-projects-header">
          <div>
            <h2>FEATURED PROJECTS</h2>
            <p className="italic-text">“A showcase of selected projects that highlight my <br/>
                skills in design and development.”</p>
          </div>
          <Link to="/projects" className="view-all">VIEW ALL</Link>
        </div>

          {/* Project Grid */}
        <div className="projects-grid">
          <div className="project-card">
            <img src={lasta} alt="lasta"/>
            <h3>LASTA Project</h3>
            <Link to="lasta">Know More →</Link>
          </div>

          <div className="project-card">
            <img src={smart_2} alt="smart_2"/>
            <h3>3D Smart House</h3>
            <Link to="smart">Know More →</Link>
          </div>

          <div className="project-card">
            <img src={puma} alt="puma"/>
            <h3>Puma Ad</h3>
            <Link to="/puma">Know More →</Link>
          </div>

          <div className="project-card">
            <img src={Photo} alt="Photo"/>
            <h3>Photography</h3>
            <Link to="photo">Know More →</Link>
          </div>
        </div>
      </section>



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
}

export default Home;