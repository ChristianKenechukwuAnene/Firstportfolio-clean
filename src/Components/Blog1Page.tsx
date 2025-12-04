import { Link } from "react-router-dom";
import './Blog1Page.css';



function Blog1Page(){

    return(

      <div className="blog1-page">
      {/* Hero Section */}

   <div className="blog1-container">
      <header className="blog1-header">
        <h1>My Blog</h1>
      </header>

  
          <div className="blog1-content">
            <h2>Technical Specifications</h2>
            <p>
            For the production of our video advertisement, we used two iPhone 16 Pro devices, 
            which allowed us to capture high-quality footage with improved low-light performance and cinematic stabilization.
            To achieve smooth movement and dynamic angles, it was difficult to achive but we have to stay still with the phone
            to be ablee to maintain stability for key classroom and close-up shots.

            Editing was completed using Adobe Premiere Pro, where we handled color grading,
            sound mixing, and transitions. Additional text effects and motion graphics were 
            added using After Effects to enhance the final visual appeal of the advertisement.
            
            </p>

            <h2>Reflection on My Contribution</h2>
            <p>
            This project was an exciting and meaningful learning experience.
            Working with a team of five allowed each of us to bring something unique to the production.
            As one of the videographers and part of the video direction team, I had the opportunity
            to shape the visual storytelling and contribute creatively to the overall execution of the advert.

            The ad focuses on a student living in a boarding school who feels tired and unmotivated
            in class—until a cup of morning coffee transforms his entire mood and energy for the day. 
            Capturing this transformation required teamwork, planning, and precise cinematography.
            </p>

               <h2>Videography</h2>
            <p>
            As one of the videographers, I was responsible for capturing clear,  
            expressive shots that effectively represented the student’s journey from 
            fatigue to refreshment. My videography contributions included:

            <ul style={{ lineHeight: "1.8" }}>
        <li>
          <strong>Camera Operation:</strong> I worked primarily with the iPhone
          16 Pro, taking advantage of its advanced stabilization and natural
          color tone to capture both static shots and smooth movement shots.
        </li>

        <li>
          <strong>Shot Composition:</strong> I planned and framed key scenes such as
          the low-energy classroom moments, the close-ups of the student’s
          expressions, and the brighter, emphasized scenes after he drinks the
          coffee.
        </li>

        <li>
          <strong>Lighting Awareness:</strong> To reflect the storyline, I ensured
          the shots before the coffee were slightly duller and cooler, while the
          “after coffee” scenes were shot in brighter, warmer tones to visually
          communicate the shift in mood.
        </li>

        <li>
          <strong>Collaboration With Crew:</strong> I coordinated with the second
          videographer to maintain continuity and consistency between angles.
        </li>
      </ul>
            </p>

           <h2>Video Direction</h2>
            <p>
            Alongside videography, I also contributed to directing the visual flow of the advert. This included:

             <ul style={{ lineHeight: "1.8" }}>
        <li>
          <strong>Guiding the Actor:</strong>  I helped direct our teammate acting as the tired student, making sure his
          expressions clearly showed the transition from exhaustion to energy.
        </li>

        <li>
          <strong>Scene Planning</strong> I worked with the group to decide where each scene should take place 
          especially the classroom sequences and the “morning coffee moment.”
        </li>

        <li>
          <strong>Blocking and Movement:</strong> I planned how the actor would move within the frame, especially 
          in the transformation scene when his mood “lights up.”
        </li>

        <li>
          <strong>Retakes and Adjustments:</strong> When lighting or continuity issues appeared, I recommended retakes and minor 
          adjustments to improve the overall quality.
        </li>
      </ul>
            </p>

            <h2>Story & Concept Execution</h2>
            <p>
            I helped brainstorm how to visually show the shift in mood from tired, 
            unfocused, and drained to energetic, motivated, and ready for the day. 
            This included suggesting camera angles such as:

             <ul style={{ lineHeight: "1.8" }}>
        <li>
          Close-up shots showing sleepy eyes before the coffee and a long shot on the closing with a passer by pointing at his feet.
        </li>

        <li>
          A slow zoom to show boredom fading and the time in the morning
        </li>

        <li>
          A brighter, energized expression after the first sip
        </li>

        <li>
          Dynamic classroom shots to show improved mood
        </li>
      </ul>
            </p>

             <h2>Final Thoughtsn</h2>
            <p>
            This project was more than just a simple advertisement it was a chance to collaborate,
            practice professional filming techniques, and tell a story through visuals. Working as
            both a videographer and part of the direction team helped me develop stronger technical
            skills and a better understanding of how to guide performances and create meaningful shots.

            I am proud of the work our team produced. Although not every moment was perfect, our creativity,
            problem-solving, and teamwork made the final advert a success. The contrast between tiredness and 
            renewed energy came through clearly, and the storytelling felt engaging and relatable.

          This experience has strengthened my interest in videography and visual storytelling,
           and I look forward to applying these skills in future projects.

            </p>

            <p>Final Video Link: <a style={{ color: 'green', fontStyle: 'italic' }}>www.youtube.com/watch?v=hGXjlXMoMAo&feature=youtu.be
             
           </a> </p>
        </div>
        <Link className="back" to="/Myblog">← Back</Link>





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
    </div>
  );
}

export default Blog1Page;