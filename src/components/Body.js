import img from "../images/helpguide-1.jpg"
import Carousel from "./Carousel";
import OurMission from "./OurMission";
import DynamicQuotes from "./DynamicQuotes";
import TailoredSupport from "./TailoredSupport";
import ComprehensiveCare from "./ComprehensiveCare";
import DrMehta from "./DrMehta";
const Body = ()=>{
    return (<>
        <div className="body">
            <h1>Shaping Mind, Transforming Lives :  <br/>
            Your Journey to Mental Health & Wellness Starts Here</h1><br/>
            <div>Shaping your mind and thoughts to unlock a healthier and happier future.</div>
            <div className="body-img-container">
            <img className="body-img" alt="the-shaping-mind-home" src={img}/> 
            </div>
                      
        </div>
        <OurMission/>
        <ComprehensiveCare/>
        <DrMehta/>
        <Carousel/>
        <TailoredSupport/>
        <DynamicQuotes/>

    </>
    )
}
export default Body;