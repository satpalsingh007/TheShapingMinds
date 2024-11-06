import depression from "../images/Blogs/Depression-short.jpg";
import anxiety from "../images/Blogs/Anxiety-short.jpg";
import stress from "../images/Blogs/Stress-short.jpg";
import trauma from "../images/Blogs/Trauma-short.jpg";
import personalGrowth from "../images/Blogs/Personal-growth-short.jpg";

import { Link } from "react-router-dom";
const IndividualsBlogsPage =()=>{
    return (
        <div className="blog-page">
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Individuals</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={depression} />
                        <h3>Depression</h3>
                        <div>
                        Healing from depression is crucial not only for personal well-being but also for..........
                         </div> 
                         <Link to={'/depression'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={anxiety} />
                        <h3>Anxiety</h3>
                        <div>
                        Anxiety can affect every aspect of life, including relationships, work performance..........
                         </div> 
                         <Link to={'/anxiety'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={stress} />
                        <h3>Stress</h3>
                        <div>
                        In small doses, stress can help you stay energized and focused. But when it’s chronic..........
                         </div> 
                         <Link to={'/stress'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={trauma} />
                        <h3>Trauma</h3>
                        <div>
                        When you’ve gone through something traumatic, it can seem like you’ll never feel safe..........
                         </div> 
                         <Link to={'/trauma'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={personalGrowth} />
                        <h3>Personal Growth</h3>
                        <div>
                        Personal growth refers to the ongoing process of self-improvement in various aspects of life, including emotional..........
                         </div> 
                         <Link to={'/personal-growth'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default IndividualsBlogsPage;