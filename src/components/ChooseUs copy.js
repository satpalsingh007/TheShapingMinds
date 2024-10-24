
import couple from "../images/couple-relationships.jpg";
import corporate from "../images/corporate-counselling.jpg";
import children from "../images/children-autism.jpg";
import individuals from "../images/individuals-depression.jpg";
const ChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Our Mission</h2>
      <div className="special-text">We empower you with the knowledge and skills you need to strengthen your mental health & well-being</div>
      <div className="why-card">
        <div className="why-cards">
          <img className="why-img" src={individuals} />
          <h3>Individual Counseling</h3>
          <div>
            <ul>
              <li><b>Description:</b> Support for adults facing depression, anxiety, stress, trauma, and personal growth challenges.</li>
              <li><b>Benefits:</b> Personalized strategies and coping mechanisms.</li>
            </ul>
           
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" src={couple} />
          <h3>Couples & Relationships Counseling</h3>
          <div>
          <ul>
              <li><b>Description:</b> Premarital counseling, addressing relationship concerns, and resolving marital discord.</li>
              <li><b>Benefits:</b> Improved communication and deeper understanding.</li>
            </ul>
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" src={children} />
          <h3>Children & Adolescents Counseling</h3>
          <ul>
              <li><b>Description:</b> Addressing emotional and developmental concerns, including learning disabilities, autism, and ADHD.</li>
              <li><b>Benefits:</b> Support for both children and parents, tailored strategies for growth.</li>
            </ul>
        </div>
        <div className="why-cards">
          <img className="why-img" src={corporate} />
          <h3>Corporate & Educational Services</h3>
          <ul>
              <li><b>Description:</b> Workplace counseling, mental wellness programs, EAPs, and executive coaching.</li>
              <li><b>Benefits:</b> Enhanced employee well-being and productivity.</li>
            </ul>
        </div>
        
      </div>
    </div>
  );
};
export default ChooseUs;
