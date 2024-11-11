import premaritalCouncelling from "../images/Blogs/Premarital-Counselling-short.jpg";
import relationshipConcern from "../images/Blogs/Relationships-Concerns-short.jpg";
import maritalDiscord from "../images/Blogs/Marital-Discords-short.jpg";

import { Link } from "react-router-dom";
const CoupleBlogsPage =()=>{
    return (
        <div className="blog-page">
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Couples and Relationships</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={premaritalCouncelling} />
                        <h3>Premaritial Counselling</h3>
                        <div>
                        Premarital counseling is a proactive approach that helps couples prepare for marriage..........
                         </div> 
                         <Link to={'/premarital-counselling'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={relationshipConcern} />
                        <h3>Relationships Concern</h3>
                        <div>
                        Relationship concerns encompass a wide range of issues that couples may face, including..........
                         </div> 
                         <Link to={'/relationship-concerns'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={maritalDiscord} />
                        <h3>Marital Discords</h3>
                        <div>
                        Marital discord refers to a state of conflict or disagreement between partners in a..........
                         </div> 
                         <Link to={'/marital-discords'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default CoupleBlogsPage;