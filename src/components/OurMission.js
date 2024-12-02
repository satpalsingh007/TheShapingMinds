import trustedguidance from "../images/trusted-guidance.jpg";
import lifelongskills from "../images/life-long-skills.jpg";
import bettertomorrow from "../images/strategies-for-a-better-tomorrow.jpg";
import reliablesupport from "../images/reliable-support-whenever-you-need-it.jpg";
import bee from "../images/bee.gif";
// import trustedguidance from "../images/trusted-guidance.jpg";
const OurMission = () => {
  return (
    <div className="our-mission">
      <h2>Our Mission</h2>
      {/* <div className="bee-path"><img className="bee" src={bee}></img></div> */}
      
      <div className="special-text">We empower you to take control of your mental health and build a fulfilling life.   </div>
      <div className="mission-section ">
        <img className="mission-imgs" alt="trusted-guidance-for-healthier-you" src={trustedguidance}/>
        <div>
          <h3>Trusted Guidance for a Healthier You  </h3>
          <p>We provide reliable and expert-driven information on mental wellness to give you confidence to make informed decisions about your well-being.</p>
        </div>
      </div>
      <div className="mission-section mission-section-rev">
        <div>
          <h3>Lifelong Skills for Emotional Strength </h3>
          <p>Our experts will help you to develop the skills to manage emotions, strengthen personal and professional relationships, and navigate life's challenges with resilience.</p>
        </div>
        <img alt="life-long-skills-for-emotional-strength" className="mission-imgs" src={lifelongskills}/>
      </div>
      <div className="mission-section">
        <img className="mission-imgs" alt="strategies-for-a-better-tomorrow" src={bettertomorrow}/>
        <div>
          <h3>Strategies for a Better Tomorrow  </h3>
          <p>We’ll teach you practical techniques to improve your mental health, and use them to support not only yourself but also your loved ones.</p>
        </div>
      </div>
      <div className="mission-section mission-section-rev">
        <div>
          <h3>Reliable Support, Whenever You Need It  </h3>
          <p>Our dedicated team is here to guide, encourage, and support you at every step to provide the care you need.</p>
        </div>
        <img alt="reliable-support-whenever-you-need-it" className="mission-imgs" src={reliablesupport}/>
      </div>

    </div>
  );
};
export default OurMission;
