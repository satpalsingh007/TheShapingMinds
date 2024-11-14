// import drmehtabg from "../images/dr-akriti-bg.png";
import { Link } from "react-router-dom";
import drmehta from "../images/dr-akriti-mehta.png";
const DrMehta =()=>{
    return (
        <div className="dr-mehta">
             <h2>Meet Dr. Aakriti Mehta  </h2>
            <div className="dr-mehta-container">
                   <div className="dr-mehta-images">
                    <div className="drmehtabg"></div>
                    {/* <img src={drmehtabg} className="drmehtabg" /> */}
                    <img src={drmehta} className="drmehta" />
                   </div>
                   <div className="dr-mehta-about">
                    <p> <strong>Dr. Aakriti Mehta</strong>  has a keen interest in the study of Mind & Behaviour. She devoted her studies in the field of psychology  and pursued Doctorate from Nagpur University in the same field. </p>
                    <p>Post her Masters, she did her internship in Clinical Psychology form <strong>VIMHANS</strong>, Delhi. She has provided her ernest services over a decade as Psychologist at various bases of Indian Air Force. She dealt with the cases of treatment of Mental health, depression, anxiety, stress, trauma and other personality disorders providing scope for effective management of the mental health issues of her clients. She has been providing yeoman services to the underprivileged section and has been associated with volunteering counselling services over half a decade to Mother Tereasa Home, Delhi.</p>
                   <Link className="dr-mehta-readmore" to={"/about-us"}>Read More...</Link>
                   </div>
                
                
                
            </div>          
        </div>
    )

}

export default DrMehta;