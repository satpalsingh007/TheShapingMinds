import workplaceCouncellings from "../images/Blogs/Workplace-Counsellings-short.jpg";
import mentalWellness from "../images/Blogs/Mental-Wellness-Programs-short.jpg";
import eap from "../images/Blogs/EAPs-Employee-Assistance-Program-short.jpg";
import executiveCoaching from "../images/Blogs/Executive-Coaching-short.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const ChildrenBlogsPage =()=>{
    return (
        <div className="blog-page">
        <Helmet>
          <title>Corporate and Educational Blogs | Mental Wellness at Work and School</title>
          <meta name="description" content="Read our blogs to know about corporate wellness, educational programs, and workplace mental health. Enhance productivity and emotional well-being with expert insights." />
          <meta name="keywords" content="corporate wellness blogs, workplace mental health, educational counseling blogs" />        
        </Helmet>
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Corporate and Educational Clients</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" alt="workplace-counsellings" src={workplaceCouncellings} />
                        <h3>Workplace Counsellings
                        </h3>
                        <div>
                        Workplace counselling refers to the professional support provided to employees facing..........
                         </div> 
                         <Link to={'/workplace-counselling'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" alt="mental-wellness" src={mentalWellness} />
                        <h3>Mental Wellness Programs</h3>
                        <div>
                        Mental wellness programs are initiatives designed to support and improve individuals' mental.........
                         </div> 
                         <Link to={'/mental-wellness'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" alt="employee-assistance-program" src={eap} />
                        <h3>EAPs Employee Assistance Program</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma..........
                         </div> 
                         <Link to={'/employee-assistance-program'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" alt="executive-coaching" src={executiveCoaching} />
                        <h3>Executive Coaching</h3>
                        <div>
                        Through personalized guidance and structured support, executive coaching helps..........
                         </div> 
                         <Link to={'/executive-coaching'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default ChildrenBlogsPage;