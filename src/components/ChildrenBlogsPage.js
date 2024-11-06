import individuals from "../images/individuals-depression.jpg";
import { Link } from "react-router-dom";
const ChildrenBlogsPage =()=>{
    return (
        <div className="blog-page">
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Children and Adolescents</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Emotional & Developmental Concerns</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/emotional-concern'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Learning Disabilities</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/learning-disabilities'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>Autism</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/autism'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={individuals} />
                        <h3>ADHD</h3>
                        <div>
                            We understand the complexities of life that lead to depression, anxiety, stress, and trauma. Our ..........
                         </div> 
                         <Link to={'/adhd'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default ChildrenBlogsPage;