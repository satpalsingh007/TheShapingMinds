import workplaceCouncellings from "../images/Blogs/Workplace-Counsellings-short.jpg";
import mentalWellness from "../images/Blogs/Mental-Wellness-Programs-short.jpg";
import eap from "../images/Blogs/EAPs-Employee-Assistance-Program-short.jpg";
import executiveCoaching from "../images/Blogs/Executive-Coaching-short.jpg";
import { Link } from "react-router-dom";
const ChildrenBlogsPage =()=>{
    return (
        <div className="blog-page">
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Corporate and Educational Clients</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={workplaceCouncellings} />
                        <h3>Workplace Counsellings
                        </h3>
                        <div>
                        Workplace counselling refers to the professional support provided to employees facing personal..........
                         </div> 
                         <Link to={'/workplace-counselling'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={mentalWellness} />
                        <h3>Mental Wellness Programs</h3>
                        <div>
                        Mental wellness programs are initiatives designed to support and improve individuals' mental.........
                         </div> 
                         <Link to={'/mental-wellness'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={eap} />
                        <h3>EAPs Employee Assistance Program</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/employee-assistance-program'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={executiveCoaching} />
                        <h3>Executive Coaching</h3>
                        <div>
                        Through personalized guidance and structured support, executive coaching helps individuals..........
                         </div> 
                         <Link to={'/executive-coaching'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default ChildrenBlogsPage;