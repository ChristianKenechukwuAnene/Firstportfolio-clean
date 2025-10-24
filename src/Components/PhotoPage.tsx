import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo1 from "../assets/photo1.jpg"; // your hero image
import {ALL_IMAGES} from "../assets/images"; // ✅ imports all other images
import "./PhotoPage.css";



  
     const INITIAL_COUNT = 12;
     const LOAD_STEP = 9;

  function PhotoPage() {
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);
  const visibleImages = ALL_IMAGES.slice(0, visibleCount);

  const handleLoadMore = () => {
  setVisibleCount((prev) => Math.min(prev + LOAD_STEP, ALL_IMAGES.length));
  };


      return (
      <div className="photo-page">
      {/* HERO */}
      <header className="photo-hero">
        <img  
          className="photo-img"
        src= {photo1} alt="Photo1" /> 

        <div className="photo-overlay">
          <h1 className="photo-title">PHOTOGRAPHY</h1>
          <p className="phot-desc">
            During my Animation undergraduate studies, I completed a dedicated photography course.
             This training honed my skills in composition, lighting, 
             and visual storytelling using DSLR cameras. It enhanced my artistic 
             eye and provided a strong foundation in capturing compelling imagery,
             directly complementing my work in digital design and animation.
          </p>
        </div>
      </header>

      {/* GALLERY */}
         <main className="container">
        <section className="works">
          <h2 className="section-title">MY LATEST WORKS</h2>

          <div className="mesh">
            {visibleImages.map((src, idx) => (
              <figure className="mesh-item" key={idx}>
                <img src={src} alt={`Work ${idx + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>

          <div className="load-more-wrap">
            {visibleCount < ALL_IMAGES.length ? (
              <button className="load-more" onClick={handleLoadMore}>
                LOAD MORE
              </button>
            ) : (
              <button className="load-more disabled" disabled>
                NO MORE IMAGES
              </button>
            )}
          </div>
        </section>
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


export default PhotoPage;