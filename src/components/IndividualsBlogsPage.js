
import individuals from "../images/individuals-depression.jpg";
import { Link } from "react-router-dom";
const IndividualsBlogsPage =()=>{
    return (
        <div className="blog-page">
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Individuals</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Depression</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/depression'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Anxiety</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/anxiety'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Stress</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/stress'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Trauma</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/trauma'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Personal Growth</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/personal-growth'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default IndividualsBlogsPage;