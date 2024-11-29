import React from 'react';
import stressImage from "../images/Blogs/stress.jpg";
import seekHelp from "../images/seek-help.jpg";
import { Helmet } from 'react-helmet';


const StressBlog = () => {
    return (
        <main className="mental-health-container">
            <Helmet>
          <title>Stress Management | Expert Counseling at The Shaping Mind</title>
          <meta name="description" content="We are a renowned name to ease stress with personalized counseling and proven techniques. The Shaping Mind helps you achieve mental peace and balance with experts." />
          <meta name="keywords" content=" stress management, counseling for stress, reduce stress" />        
        </Helmet>
            <div className="mental-health-intro">
                <article className="mental-health-intro-text">
                    <h1 className="mental-health-title">Stress</h1>
                    <h2 className="mental-health-subtitle">You Are Not Alone. Help and Hope Are Within Reach.</h2>
                    <p className="mental-health-description">
                        In small doses, stress can help you stay energized and focused. But when it’s chronic or overwhelming, it can damage your health, productivity, and well-being. Learn the warning signs and what you can do to protect yourself.
                    </p>
                </article>
                <img className="mental-health-image" src={stressImage} alt="Help Image" />
            </div>

            <div className="mental-health-content">
                <div className="mental-health-section">
                    <h2 className="section-title">What is Stress</h2>
                    <p className="section-text">
                        Stress is the body’s natural response to danger, either real or imagined. When you feel threatened in some way, your body activates the stress response or “fight-or-flight” mode to keep you safe.
                    </p><br/>

                    <h2 className="section-title">How Stress Happens</h2>
                    <p className="section-text">
                        Stress comes with physical, cognitive, and emotional symptoms. Physical symptoms include increased heartbeat, rapid breathing, and tension. Cognitive signs of stress can involve racing thoughts and difficulty concentrating.
                    </p>
                    <br/>
                    <h2 className="section-title">How does it affect the body</h2>
                    <p className="section-text">
                        When you’re under stress, your body releases stress hormones, prompting changes such as rapid heartbeat and muscle tension. Over time, stress can harm your body and overall well-being.
                    </p>
                    <br/>
                    <h2 className="section-title">Mindfulness and Relaxation Techniques</h2>
                    <p className="section-text">
                        Incorporating mindfulness practices, such as meditation and deep breathing, can significantly alleviate stress and promote relaxation.
                    </p>
                    <br/>
                    <h2 className="section-title">Seeking Professional Help</h2>
                    <p className="section-text">
                        When stress becomes overwhelming, it’s important to seek help from a mental health professional. Therapy options can provide valuable coping tools.
                    </p>
                    <br/>
                    <h2 className="section-title">Resources for Further Support</h2>
                    <p className="section-text">
                        Provide a list of resources, including books, websites, and hotlines, where individuals can find more information and support for stress management.
                    </p>


                    <p className="section-text">
                        Each member of our team brings unique expertise in mental health care. From licensed therapists to support staff, we are equipped to address a wide range of concerns related to anxiety.
                    </p><br/>
                    <ul >
                        <li >
                            <strong >
                                
                                Individual Counseling: 
                            </strong>
                            One-on-one sessions to explore your feelings and develop coping strategies.
                        </li>
                        <li>
                            <strong >
                                
                                Group Therapy: 
                            </strong>
                            Connect with others who understand your experiences in a supportive group setting.
                        </li>
                        <li>
                            <strong >
                                
                                Workshops and Resources: 
                            </strong>
                            Educational sessions focused on mental health awareness and self-care techniques.
                        </li>
                    </ul>
                    <br />
                </div>

                <div className="mental-health-support">
                <img className="support-image" src={seekHelp} alt="Seek help illustration" />
                <h3 className="support-title">Help and Hope for Better Mental Health</h3>
                <p className="support-description">TheShapingMind simplifies the journey to better mental health by providing top-tier, experienced, and licensed therapists. Take an assessment to get connected with the right professional to support you every step of the way.</p>
                   
                </div>
            </div>
        </main>
    );
};

export default StressBlog;
