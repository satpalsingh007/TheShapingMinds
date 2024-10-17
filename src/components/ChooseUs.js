import creativeDesigner from "../resources/vectors/ChooseUs/creative-designers-expert-developers.png";
import dedication from "../resources/vectors/ChooseUs/dedication-to-clients-success.png";
import easilyManagable from "../resources/vectors/ChooseUs/easily-manageable-platforms.png";
import goal from "../resources/vectors/ChooseUs/goal-and-roi-focused.png";
import inDepth from "../resources/vectors/ChooseUs/in-depth-industries-experience.png";
import quality from "../resources/vectors/ChooseUs/quality-streamlined-process.png";
const ChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2>Our Mission</h2>

      <div className="why-card">
        <div className="why-cards">
          <img className="why-img" src={inDepth} />
          <h3>In-depth industries experience</h3>
          <div>
            We have worked in various domains and helped several businesses to
            successfully create their online presence. With our expertise &
            knowledge, we take your business to the next level.
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" src={goal} />
          <h3>Goal & ROI focused</h3>
          <div>
            We focus on your business goals to better track our marketing
            efforts. For each project, we implement a process to track and
            measure traffic. Our efforts help in getting more leads, conversions
            and website growth.
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" src={quality} />
          <h3>Quality & streamlined process</h3>
          <div>
            Our work process ensures the project flows efficiently & smoothly.
            We check the quality at each step of the process. We communicate
            with you regularly for changes you might require later.
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" src={creativeDesigner} />
          <h3>Creative designers & Expert developers</h3>
          <div>
            Everyone is creative and expert on our team. Each has years of
            experience working on a large number of websites from various
            industries. We create W3C compliant, pixel-perfect, optimized
            websites.
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" src={easilyManagable} />
          <h3>Easily manageable platforms</h3>
          <div>
            We build future-proof scalable websites. Our websites are
            easily-manageable with some training. We also provide web
            maintenance services for new and old websites.
          </div>
        </div>
        <div className="why-cards">
          <img className="why-img" src={dedication} />
          <h3>Dedication to client’s success</h3>
          <div>
            We think of ourselves as a part of your team. We understand your
            success means our success in the industry. Our focus is on making
            long-term relations with every client.
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;
