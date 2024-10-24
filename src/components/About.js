import img1 from "../images/night-lamps.png"
import ourteam from "../images/our-team.jpg"
const About=()=>{
    return(
        <div className="about">
            <div className=" about-main">
                <div>
                    <h1>About Us </h1>
                    <p>At The Shaping Minds, we firmly believe that mental well-being is the foundation of a fulfilling existence. Our center is dedicated to providing compassionate counseling and support to individuals, couples, families, and organizations—because everyone deserves to succeed.Our purpose is simple: to help you understand your mental health, overcome obstacles, and embrace personal progress. We are devoted to providing a safe and friendly atmosphere in which you can feel truly valued and heard.</p>

                </div>
                <img className="about-main-img" src={img1}/>
            </div>
            <div className="about-section">
                    <h2>Meet Our Team </h2>
                <div className="about-our-team">

                    <img className="about-img" src={ourteam}/>
                    <p className="about-content">The HelpGuide team is a passionate group of people dedicated to providing you with empowering, evidence-based mental health information, resources, and tools.</p>
                </div>
            </div>
            <div className="about-our-commitment">
                <h2>Our Commitment to<br/><span>Diversity, Inclusion, Equity & Belonging</span>
                </h2>
                <div>
                    <p>At HelpGuide.org, we are committed to building a diverse, inclusive, and equitable organization and society—one that reflects our many stakeholders and where all of our employees, volunteers, and partners feel a sense of belonging, value, and respect—regardless of race, gender/gender identity, ethnicity, national origin, age, sexual orientation, education, disability, veteran status, or other dimension of diversity.</p>
                    <p>We are committed to providing informed, authentic leadership for cultural equity and modeling diversity and inclusion in all our work. To that end, we are committed to:</p>
                    <ul>
                        <li>see diversity, inclusion, and equity as connected to our mission and critical to ensure the well-being of our staff and the many people around the world who we work with and serve;</li>
                        <li>identify and dismantle inequities within our policies, systems, programs, and services, and continually update and report the organization’s progress;</li>
                        <li>explore potential underlying, unquestioned assumptions that interfere with our ability to advance inclusiveness;</li>
                        <li>advocate for and support board-level thinking about how systemic inequities impact our organization’s work and how to address them in a way that is consistent with our mission and values;</li>
                        <li>practice and encourage transparent communication in all of our interactions; and</li>
                        <li>lead with respect and tolerance.</li>
                    </ul>
                    <p>We expect all of our leaders, employees and partners to embrace these imperatives, and to uphold them in our everyday practice and decision making.</p>
                    <p>By celebrating and centering diversity, inclusion, equity, and belonging in everything we do, we expand our access to the best talent, ideas, perspectives, and resources available to meet our mission in the most beneficial and impactful way possible.</p>
                </div>
            </div>            

        </div>
    )
}
export default About;