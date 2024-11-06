import React from 'react';
import traumaImage from "../images/Blogs/trauma.jpg";
import seekHelp from "../images/seek-help.jpg";
const Trauma = () => {
    return (
        <main className="mental-health-container">
            <div className="mental-health-intro">
                <article className="mental-health-intro-text">
                    <h1 className="mental-health-title">PTSD & Trauma</h1>
                    <h2 className="mental-health-subtitle">You Are Not Alone. Help and Hope Are Within Reach.</h2>
                    <p className="mental-health-description">
                        When you’ve gone through something traumatic, it can seem like you’ll never feel safe again. But whether the trauma happened yesterday or years ago, you can find a way to heal, let go of painful memories, and move on.
                    </p>
                </article>
                <img className="mental-health-image help" src={traumaImage} alt="Help illustration" />
            </div>

            <div className="mental-health-content">
                <div className="mental-health-section">
                    <h2 className="section-title">PTSD and Trauma</h2>
                    <p className="section-text">
                        PTSD is a mental health condition triggered by experiencing or witnessing a traumatic event. It can lead to severe anxiety, flashbacks, and emotional distress, affecting daily life. Trauma can follow an event that causes extremely high levels of stress such as living through a natural disaster, witnessing a violent incident, or being involved in a car accident.
                    </p>

                    <h2 className="section-title">Signs of PTSD</h2>
                    <p className="section-text">
                        Different people may experience different symptoms of PTSD. Common signs include intrusive flashbacks or nightmares about the traumatic event, and the urge to avoid reminders of the event, such as certain locations or people.
                    </p>
                    <p className="section-text">
                        Symptoms can include feelings of detachment or numbness, hyperarousal (feeling tense, jumpy, or irritable), negative moods and thoughts, and reduced focus or impaired memory.
                    </p>

                    <h2 className="section-title">Types of Trauma</h2>
                    <p className="section-text">Trauma can take on several forms:</p>
                    <p className="section-text"><strong>Acute trauma:</strong> Distress after a single or short incident, such as a car accident.</p>
                    <p className="section-text"><strong>Chronic trauma:</strong> Resulting from repeated incidents, such as physical or sexual abuse.</p>
                    <p className="section-text"><strong>Complex trauma:</strong> Resulting from multiple traumatic incidents throughout childhood, negatively affecting relationships and self-image.</p>
                    <p className="section-text"><strong>Secondary trauma:</strong> Resulting from witnessing or hearing about someone else’s traumatic event.</p>

                    <h2 className="section-title">Effects of Trauma on Daily Life</h2>
                    <p className="section-text">Trauma can profoundly impact personal and professional life, leading to challenges in relationships, work performance, and overall mental health. Individuals may struggle with trust, emotional regulation, and self-esteem.</p>
                    <p className="section-text">Women may experience PTSD symptoms differently, often feeling more emotionally numb, depressed, and anxious, with symptoms lasting longer than in men.</p>

                    <h2 className="section-title">PTSD Treatments</h2>
                    <p className="section-text">Treatments for PTSD include:</p>
                    <ul className="section-list">
                        <li className="section-list-item">Medication, such as selective serotonin reuptake inhibitors (SSRIs), to treat depression or anxiety symptoms.</li>
                        <li className="section-list-item">Cognitive-behavioral therapy, which addresses distorted thinking patterns.</li>
                        <li className="section-list-item">Eye Movement Desensitization and Reprocessing (EMDR), which uses eye movements to process traumatic memories.</li>
                    </ul>

                    <h2 className="section-title">Building a Support Network</h2>
                    <p className="section-text">Connecting with trusted friends, family, or support groups can provide essential emotional support. Mindfulness practices, including meditation and deep breathing exercises, can also help reduce symptoms of PTSD.</p>
                </div>

                <div className="mental-health-support">
                    <img className="support-image img-seek" src={seekHelp} alt="Seek help illustration" />
                    <h3 className="support-title">Professional therapy, done online</h3>
                    <p className="support-description">BetterHelp makes starting therapy easy. Take the assessment and get matched with a professional, licensed therapist.</p>
                    
                </div>
            </div>
        </main>
    );
};

export default Trauma;
