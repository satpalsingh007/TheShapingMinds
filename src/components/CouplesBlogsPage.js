
import individuals from "../images/individuals-depression.jpg";
import { Link } from "react-router-dom";
const CoupleBlogsPage =()=>{
    return (
        <div className="blog-page">
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Couples and Relationships</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Premaritial Counselling</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/premarital-counselling'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Relationships Concern</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/relationship-concerns'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Marital Discords</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/maritial-discords'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default CoupleBlogsPage;