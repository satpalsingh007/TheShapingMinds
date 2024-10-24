

import healthieryou from "../images/sample.jpg"
const OurMission = () => {
  return (
    <div className="our-mission">
      <h2>Our Mission</h2>
      <div className="special-text">We empower you to take control of your mental health and build a fulfilling life.   </div>
      <div className="mission-section">
        <img className="mission-imgs" src={healthieryou}/>
        <div>
          <h3>Trusted Guidance for a Healthier You  </h3>
          <p>We provide reliable and expert-driven information on mental wellness to give you confidence to make informed decisions about your well-being.</p>
        </div>
      </div>
      <div className="mission-section">
        <div>
          <h3>Lifelong Skills for Emotional Strength </h3>
          <p>Our experts will help you to develop the skills to manage emotions, strengthen personal and professional relationships, and navigate life's challenges with resilience.</p>
        </div>
        <img className="mission-imgs" src={healthieryou}/>
      </div>
      <div className="mission-section">
        <img className="mission-imgs" src={healthieryou}/>
        <div>
          <h3>Strategies for a Better Tomorrow  </h3>
          <p>We’ll teach you practical techniques to improve your mental health, and use them to support not only yourself but also your loved ones.</p>
        </div>
      </div>
      <div className="mission-section">
        <div>
          <h3>Reliable Support, Whenever You Need It  </h3>
          <p>Our dedicated team is here to guide, encourage, and support you at every step to provide the care you need.</p>
        </div>
        <img className="mission-imgs" src={healthieryou}/>
      </div>

    </div>
  );
};
export default OurMission;
