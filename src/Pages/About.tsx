import keecee1 from'../assets/Keecee.png';
import './About.css'; // Import the CSS file
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaPinterest, FaArtstation } from "react-icons/fa";


//This defines a React functional component named About.
// It returns JSX  that will be rendered on the website.*//
function About() {
  return (

     <div className="contact-me">  
  {/* {This is the main wrapper for the entire “About” page.
       The CSS class contact-me is controlling the overall layout and spacing} */}

     {/* Hero Section */}
      <header className="hero2">
        <h1>ABOUT ME</h1>
       
      </header>


    <div className="bio-card">
      <div className="title">
        <img src={keecee1} alt="keecee1" />
      </div>

      <div className="data">
        <h2 className="name">Christian Anene</h2>
        <p className="role">UI/UX Designer</p>

      {/*This block contains my background story and professional journey:
        About me: a short bio introducing your design focus and style.
        Education: where and what i studied (e.g. VFX and Motion Design at Münster University).
        Experience: examples of my work and how i developed my skills through projects.
        Essentially, this part gives visitors insight into my professional narrative. */}

        <div className="segment">
          <div className="aboutSeg">
            <h3>About me</h3>
            <p>
             A UX/UI and Motion Designer focused on building engaging, user-centric digital products. 
             I leverage expertise in animation and motion graphics to design intuitive interfaces 
             where every interaction is informed by usability and enhanced by purposeful motion.
            </p>

            <h3>Education</h3>
            <p>
              <strong>Munster University</strong>
              <br />
              VFX and Motion Design, 2024
            </p>

            <h3>Experience</h3>
            <p>
              <strong>UI/UX Designer</strong>
              <br />
              "During my masters programm, I developed a personal blog to showcase my expertise
               in UI/UX design and front-end development. The blog features articles on design principles, 
               tips for improving user interfaces, and my journey to becoming a successful designer.
                I built the blog using React and CSS, focusing on a clean and minimalistic design.
                 Although the initial version was not responsive, I later improved it to be mobile-friendly. 
                 This project allowed me to demonstrate my technical skills and my ability to communicate 
                 design concepts effectively, which became a talking point in interviews and helped me secure a position."
            </p>
            <p>
              <strong>Graphic Designer</strong>
              <br />
              uring my Animation degree, I built comprehensive graphic design skills through 
              courses in design principles, color theory, and typography. I gained proficiency
               in Adobe Creative Suite, 2D/3D animation, and motion graphics while creating projects
                like original short films, brand identities, and UI/UX prototypes. This training 
                developed my technical abilities in both static and motion design, alongside
                crucial transferable skills including creative problem-solving, visual storytelling, 
                and collaborative project management. My education provided a strong foundation
                in transforming concepts into polished visual products, preparing me for
                 dynamic professional design environments.
            </p>
          </div>

          <div className="skills1">
            <h3>Skills & Tools</h3>

            <h4>Designing Softwares</h4>
            <div className="tags1">
              <span>Adobe Photoshop</span>
              <span>Adobe Illustrator</span>
              <span>Maya 3D</span>
              <span>WordPress</span>
            </div>

            <h4>Languages</h4>
            <div className="tags1">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C#</span>
            </div>

            <h4>Editing Softwares</h4>
            <div className="tags1">
              <span>Canva</span>
              <span>Adobe Premiere</span>
              <span>Adobe After Effects</span>
              <span>CapCut</span>
            </div>
          </div>
        </div>
        <div className="sidebar">
      {/* Your existing sidebar content */}
      <div className="skill-social">
      <h3>Connect with Me</h3>
        {/* ... existing sections ... */}
      </div>

{/* {This creates a sidebar with links to my social media profiles.
     Each <a> tag wraps an icon downloded from react icon (Facebook, LinkedIn, Instagram, Twitter, Pinterest, Artstation).
     When clicked, each icon opens my social profile in a new browser tab (target="_blank").} */}

      {/* ✅ Social Media Links */}
      <div className="social-links">
        <div className="icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/feed"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
            </a>

            <a
            href="https://ie.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaPinterest />
          </a>

          <a
            href="https://www.artstation.com/?sort_by=community&include_ai=false"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaArtstation />
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  {/* {This is the closing section of the page.
       Encourages visitors to collaborate or contact me (“Let’s work together…”).
       Includes an automatically updating copyright year:} */}

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

export default About;