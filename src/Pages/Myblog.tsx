import './Myblog.css'; // Import the CSS file
import { Link } from "react-router-dom";



function Myblog(){

    return(

      <div className="myblog-page">
      {/* Hero Section */}

      {/*This inner container keeps all the blog content organized.
          It helps in aligning the header and blog posts nicely within the page. */}

   <div className="blog-container">
      <header className="blog-header">
        <h1>My Blog</h1>
        <p>
      "From animation student to UX enthusiast. Sharing design discoveries,
       usability secrets, and the path to creating better digital experiences."


        </p>
      </header>

      <div className="blog-list">     {/*This wraps all your individual blog posts (each one is a .blog-item).
                                         Think of this as the main feed that displays all my articles in preview form. */}
        <div className="blog-item">



          {/*Each .blog-item represents one article preview.
              The .blog-content contains:
              Title (<h2>) – headline of the blog post.
              Paragraph (<p>) – short summary or intro paragraph.
              <Link> – uses React Router to navigate to the full article page (in this case /blog1). */}
  
          <div className="blog-content">
            <h2>Usability Secrets to Create Better User Interfaces</h2>
            <p>
            Creating better user interfaces hinges on prioritizing usability. 
            The core secrets involve designing for simplicity and intuitiveness, 
            ensuring users can navigate effortlessly. Implement clear visual hierarchies,
            consistent design patterns, and provide immediate, clear feedback for user actions.
            Streamline tasks to minimize cognitive load and reduce the number of steps to
            completion. Always align the interface with the user's mental models by
            using familiar icons and language. Crucially, conduct real user testing
            to identify pain points and refine the experience. A truly successful 
            UI feels invisible, enabling users to achieve their goals 
            with efficiency and satisfaction, ultimately driving engagement and growth.
            </p>
            <a><Link to="/blog1">Read More</Link></a>
          </div>
        </div>

        {/*This is my second blog post preview.
           The text summarizes useful UI design tips — covering clarity, consistency, accessibility, and testing.
           The link points to /blog2, leading to the full article page for that post. */}

        <div className="blog-item">
        
          <div className="blog-content">
            <h2>10 Useful Tips to Improve Your UI Designs</h2>
            <p>
            Elevate your UI designs by focusing on clarity and user intuition. 
            Maintain visual consistency through cohesive color schemes and typography.
            Implement clear information hierarchy to guide user attention effectively. 
            Ensure adequate contrast and spacing for better readability.
            Simplify navigation with intuitive patterns and minimize user cognitive load. 
            Incorporate meaningful micro-interactions for engaging feedback. Optimize
            forms with smart defaults and clear labels. Use familiar UI patterns to
            reduce learning curves. Prioritize accessibility to accommodate all users.
            Finally, validate designs through continuous user testing and iteration.
            hese principles create interfaces that are not just visually appealing 
            but genuinely functional and user-friendly.
            </p>
            <Link to="/blog2">Read More</Link>
          </div>
        </div>


          {/*Third blog preview.
              The content talks about your personal journey and advice for aspiring UI/UX designers.
              Again, there’s a “Read More” link that directs to /blog3. */}
        <div className="blog-item">
          <div className="blog-content">
            <h2>How to Become a Successful UI/UX Designer</h2>
            <p>
              Becoming a successful UI/UX designer requires mastering both technical 
              and human-centered skills. Develop proficiency in design tools like Figma 
              and Adobe XD while understanding fundamental principles of layout, color,
               and typography. Conduct user research to inform design decisions and create 
               wireframes and prototypes for testing. Cultivate empathy to solve real user
                problems and collaborate effectively with developers. Build a strong 
                portfolio showcasing your process and problem-solving abilities.
                 Stay updated with industry trends, seek feedback continuously, 
                 and embrace iterative design. Success comes from balancing aesthetic 
                 appeal with functional, accessible designs that deliver seamless user experiences.


            </p>
            <Link to="/blog3">Read More</Link>
          </div>
        </div>
      </div>
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
}

export default Myblog;