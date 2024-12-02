
import couple from "../images/couple-relationships.jpg";
import corporate from "../images/corporate-counselling.jpg";
import children from "../images/children-autism.jpg";
import individuals from "../images/individuals-depression.jpg";
const TailoredSupport = () => {
  return (
    <div className="why-choose-us">
      <h2>Tailored Support for Every Stage of Life</h2>
     
      <div className="why-card">
        <div className="why-cards">
          <img className="why-img" alt="individual-depressed" src={individuals} />
          <h3>For Individuals (Adults)</h3>
          <div>
          We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our individual counseling services focus on personal growth and resilience, to offer you a safe space to explore and heal.
           
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" alt="couples-and-relationships" src={couple} />
          <h3>For Couples & Relationships</h3>
          <div>
          Healthy relationships form the foundation of a fulfilling life. We provide premarital counseling, address relationship concerns, and help resolve marital discords, giving couples the tools they need to grow stronger together.
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" alt="child" src={children} />
          <h3>For Children & Adolescents</h3>
          <div>
            Children and adolescents face unique emotional, developmental, and behavioral challenges. Our services cater to those with learning disabilities, autism, ADHD, and other concerns, ensuring they receive the care and guidance they deserve.
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" alt="corporation-and-educational" src={corporate} />
          <h3>For Corporations & Educational Institutions</h3>
          <div>
          Fostering mental wellness in the workplace is essential. We offer workplace counseling, Employee Assistance Programs (EAPs), mental wellness initiatives, and executive coaching designed to enhance employee well-being and productivity.
          </div>
        </div>
      </div>
    </div>
  );
};
export default TailoredSupport;
