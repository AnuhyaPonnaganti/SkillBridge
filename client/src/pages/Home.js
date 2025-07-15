import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="hero">
        <h1>
          Welcome to <span className="highlight">SkillBridge</span>
        </h1>
        <p>Empowering Underprivileged Teens by Connecting Talent with Mentors 🌟</p>
      </header>

      <section className="content">
        <div className="card">
          <img
            src="\assets\talent.jpg"
            alt="Talent Showcase"
          />
          <h2>Discover Talent</h2>
          <p>Explore the inspiring talents of young students looking for guidance and support.</p>
        </div>

        <div className="card">
          <img
            src="/assets/mentor.jpg"
            alt="Mentorship"
          />
          <h2>Become a Mentor</h2>
          <p>Support youth by sharing your knowledge, skills, and encouragement.</p>
        </div>

        <div className="card">
          <img
            src="/assets/community.jpg"
            alt="Community Impact"
          />
          <h2>Make an Impact</h2>
          <p>Help shape a better future by uplifting passionate and talented teens.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
