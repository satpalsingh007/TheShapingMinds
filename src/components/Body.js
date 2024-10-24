import img from "../images/helpguide-1.jpg"
import Carousel from "./Carousel";
import OurMission from "./OurMission";
import DynamicQuotes from "./DynamicQuotes";
import TailoredSupport from "./TailoredSupport";
import ComprehensiveCare from "./ComprehensiveCare";
const Body = ()=>{
    return (<>
        <div className="body">
            <h1>Your trusted guide to<br/>
            mental health & wellness</h1><br/>
            <div>Start improving your mental health and well-being today. HelpGuide.org shows you how.</div>
            <img src={img}/>            
        </div>
        <OurMission/>
        <ComprehensiveCare/>
        <Carousel/>
        <TailoredSupport/>
        <DynamicQuotes/>

    </>
    )
}
export default Body;