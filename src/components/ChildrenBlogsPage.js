import emotionalAndDevelopmentConcerns from "../images/Blogs/Emotional-Developmental-Concerns-short.jpg";
import learningDisability from "../images/Blogs/Learning-Disabilities-short.jpg";
import autism from "../images/Blogs/Autism-short.jpg";
import adhd from "../images/Blogs/ADHD-short.jpg";
import { Helmet } from "react-helmet";


import { Link } from "react-router-dom";
const ChildrenBlogsPage =()=>{
    return (
        <div className="blog-page">
            <Helmet>
          <title>Children and Adolescents Blogs | Expert Parenting Tips</title>
          <meta name="description" content="Discover parenting and mental health tips for children and teens. Get insights on emotional development, learning challenges, and mental well-being of your children." />
          <meta name="keywords" content=" parenting blogs, adolescent mental health tips, child development articles" />        
        </Helmet>
            <h1>Our Blogs </h1>
            <div className="blog-page-section">
                <h2>Children and Adolescents</h2>
                <div className="blog-list">
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={emotionalAndDevelopmentConcerns} />
                        <h3>Emotional & Developmental Concerns</h3>
                        <div>
                        Emotional and developmental concerns refer to difficulties or delays in emotional regulation..........
                         </div> 
                         <Link to={'/emotional-concern'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={learningDisability} />
                        <h3>Learning Disabilities</h3>
                        <div>
                        Learning disabilities are neurological conditions that affect the way individuals ..........
                         </div> 
                         <Link to={'/learning-disabilities'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                         
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={autism} />
                        <h3>Autism</h3>
                        <div>
                        Autism Spectrum Disorder (ASD) is a developmental disorder that affects how a person perceives and ..........
                         </div> 
                         <Link to={'/autism'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    <div className="blog-list-item">
                        <img className="blog-list-img" src={adhd} />
                        <h3>ADHD</h3>
                        <div>
                        ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurological condition that affects a person’s..........
                         </div> 
                         <Link to={'/adhd'} className="blog-read-more-button" onClick={() => window.scrollTo(0, 0)}>read-more</Link>
                    </div>
                    
                   
                </div>
            </div>

            

            
        </div>
    )

}

export default ChildrenBlogsPage;