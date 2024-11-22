import img1 from "../images/about-us.jpg"
import ourteam from "../images/our-team.jpg"
const About=()=>{
    return(
        <div className="about">
            <div className=" about-main">
                <div>
                    <h1>About Us </h1>
                    <img className="about-main-img-mobile" src={img1}/>
                    <p>Welcome to The Shaping Mind, where your mental well-being is our top priority. We understand that mental health is as important as physical health, and we are here to support you on your journey toward a happier, healthier life. Whether you're dealing with stress, anxiety, trauma, or need guidance for personal growth, The Shaping Mind provides trusted, compassionate care for individuals of all ages.</p>

                </div>
                <img className="about-main-img" src={img1}/>
            </div>
            <div className="about-dr-aakriti">
            <div className="about-section">
                <h2>Our Founder –<br/> Dr. Aakriti Mehta </h2>
                <div className="about-our-team">
                    <img className="about-img" src={ourteam}/>
                    <p className="about-content">At the helm of The Shaping Mind is Dr. Aakriti Mehta, a passionate psychologist with over a decade of experience. Dr. Mehta’s journey in the field of mental health began with a deep interest in the study of mind and behavior, which led her to pursue a Doctorate in Psychology from Nagpur University. With a Masters and specialized internship in Clinical Psychology from VIMHANS, Delhi, she has dedicated her career to helping individuals navigate the complexities of mental health.</p>
                </div>
                <p className="about-content-para2">Her extensive experience includes providing psychological services at various bases of the Indian Air Force, where she treated clients facing a range of mental health challenges including depression, anxiety, stress, trauma, and personality disorders. Dr. Mehta has also volunteered at Mother Teresa Home, Delhi, providing counseling services to the underprivileged for over half a decade.</p>
                <p className="about-content-para3">Dr. Mehta is particularly passionate about adolescent mental health, and her research focuses on life skills training, emotional intelligence, and self-concept development for teens. Her belief that adolescents deserve better tools for managing stress and emotional health has shaped the core of The Shaping Mind’s approach.</p>
            </div>

            </div>
            
            <div className="about-our-commitment">
                <h2>Our Mission</h2>
                <div>
                    <p>At The Shaping Mind, we are committed to providing accessible, effective psychological services across the country. Whether you're a child, adolescent, or adult, our goal is to offer support tailored to your unique mental health needs. We believe in creating a safe, confidential space for individuals to explore their thoughts, emotions, and behaviors with the help of expert guidance.</p>
                </div><br/>
                <h2>Our Approach</h2>
                <div>
                    <p>We offer a range of services to promote mental wellness, including therapy, counseling, life skills development, and emotional intelligence coaching. Dr. Mehta’s holistic approach integrates a variety of psychological techniques to ensure that you not only overcome current challenges but also build a strong foundation for long-term emotional well-being.</p>
                    <p>Our services are available online, making it easy for individuals nationwide to access professional mental health support from the comfort of their homes.</p>
                </div><br/>
                <h2>Trusted & Experienced</h2>
                <div>
                    <p>Dr. Mehta is a proud member of the National Health Counseling Association (NHCA) in Singapore and the Counselor Council of India. She is also an Assistant Professor of Psychology at the Institute of Technology and Management, Dehradun, where she heads the Personal Development Program (PDP).</p>
                    <p>With years of experience, deep empathy, and a genuine passion for mental health, Dr. Mehta has earned the trust and respect of countless individuals. At The Shaping Mind, we strive to continue her legacy of providing compassionate care and guidance to everyone in need.</p>
                </div>
            </div>  

            <div className="join-us">
                <div className="join-us-content">
                <h2>Join Us on the Journey to Better Mental Health</h2>
                <p>At <strong>The Shaping Mind</strong>, we believe that everyone deserves the opportunity to live a fulfilling life, free from the limitations of mental health struggles. We are here to help you every step of the way.</p>
                <p>To learn more about our services, connect with us through our <a href="https://www.facebook.com/TheShapingMind"><b>Facebook page</b></a>  or <a href="https://www.linkedin.com/company/aakrititheshapingmind/"><b>LinkedIn profile</b></a> .</p>
                <p>Take the first step toward mental wellness today. The Shaping Mind is here to support you.</p>
                </div>
               
            </div> 
                     

        </div>
    )
}
export default About;