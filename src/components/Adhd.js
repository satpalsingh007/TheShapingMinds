import React from 'react';
import seekHelp from "../images/seek-help.jpg";
import adhdImage  from "../images/Blogs/ADHD.jpg";

const ADHD = () => {
    return (
        <main className="mental-health-container">
            <div className="mental-health-intro">
                <article className="mental-health-intro-text">
                    <h1 className="mental-health-title">What is ADHD?</h1>
                    <h2 className="mental-health-subtitle">You Are Not Alone. Help and Hope Are Within Reach.</h2>
                    <p className="mental-health-description">
                        ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurological condition that affects a person’s ability to focus, control impulses, and regulate behavior.
                    </p>
                </article>
                <img className="mental-health-image" src={adhdImage} alt="Help Image" />
            </div>

            <div className="mental-health-content">
                <div className="mental-health-section">
                    <h2 className="section-title">Signs and Symptoms of ADHD in Children and Adults</h2>
                    <p className="section-text">
                        ADHD often presents in childhood, but symptoms can persist into adulthood. ADHD is characterized by three main symptoms:
                    </p>
                    <p><strong>Inattention:</strong> Difficulty staying focused, making careless mistakes, and following instructions.</p>
                    <p><strong>Hyperactivity:</strong> Excessive movement, difficulty sitting still, and fidgeting.</p>
                    <p><strong>Impulsivity:</strong> Acting without thinking, making hasty decisions, or interrupting others. While the condition is not caused by poor parenting or lack of discipline, it can be influenced by genetics, brain structure, and environmental factors.</p>
                    <br />

                    <h2 className="section-title">How ADHD Affects Relationships and Social Interactions</h2>
                    <p className="section-text">
                        <strong>Relationship Challenges:</strong> ADHD can significantly impact social relationships. People with ADHD may struggle to maintain friendships or work relationships due to impulsivity, forgetfulness, or difficulty focusing during conversations. They might miss social cues, interrupt others, or fail to follow through on commitments, which can lead to frustration or misunderstanding in personal and professional settings.
                    </p>
                    <p className="section-text">Trouble with listening or paying attention during conversations.</p>
                    <p className="section-text">Difficulty prioritizing relationships due to distractibility or disorganization.</p>
                    <br />

                    <h2 className="section-title">Emotional and Psychological Impact of ADHD</h2>
                    <p className="section-text">
                        ADHD is not just about difficulty focusing or staying still—it can also have a deep emotional and psychological impact on individuals. People with ADHD often struggle with self-esteem due to their constant feelings of inadequacy or failure, especially in academic or professional settings.
                    </p>
                    <p className="section-text"><strong>Anxiety and Stress:</strong> The constant pressure to meet expectations can cause overwhelming stress.</p>
                    <p className="section-text"><strong>Anxiety and Depression:</strong> People with ADHD may experience feelings of depression, especially if they feel misunderstood or judged.</p>
                    <p className="section-text"><strong>Low Self-Esteem:</strong> Difficulty with organization or attention can lead to negative self-perception.</p>
                    <br />

                    <h2 className="section-title">How ADHD Affects Academic and Career Success</h2>
                    <p className="section-text">
                        ADHD can make academic success challenging. Individuals may struggle with tasks that require sustained attention, such as reading, writing, and completing assignments on time. At work, it may affect productivity, meeting deadlines, and keeping organized. However, with the right tools, people with ADHD can thrive in both educational and professional environments.
                    </p>
                    <p className="section-text">Difficulty concentrating during lectures or meetings.</p>
                    <p className="section-text">Procrastination or trouble with time management.</p>
                    <p className="section-text">Trouble with organizing work or managing multiple tasks.</p>
                    <p className="section-text">Trouble completing projects or assignments.</p>
                    <br />

                    <h2 className="section-title">Creating a Friendly Environment</h2>
                    <p className="section-text">
                        A structured environment can be a game-changer for individuals with ADHD. Simple changes at home or work can make a big difference in managing symptoms.
                    </p>
                    <p className="section-text"><strong>Declutter Spaces:</strong> A clean and organized environment can reduce distractions and improve focus.</p>
                    <p className="section-text"><strong>Time Management Tools:</strong> Use planners, alarms, and timers to help with time management.</p>
                    <p className="section-text"><strong>Break Tasks into Smaller Steps:</strong> Breaking larger tasks into smaller, manageable steps can reduce overwhelm.</p>
                    <p className="section-text"><strong>Minimize Distractions:</strong> Create a quiet, distraction-free zone for work or studying.</p>
                    <br />

                    <h2 className="section-title">Resources and Support for ADHD</h2>
                    <p className="section-text">
                        Many resources are available to help individuals with ADHD. From online support groups to therapy and specialized coaching, there are numerous avenues for seeking help and finding solutions.
                    </p>
                    <p className="section-text"><strong>ADHD Support Groups:</strong> Connecting with others who understand the condition can provide emotional support.</p>
                    <p className="section-text"><strong>Therapists and Coaches:</strong> Professional guidance can help individuals develop coping strategies and stay organized.</p>
                    <p className="section-text"><strong>ADHD Advocacy Organizations:</strong> Non-profits and advocacy groups can provide resources, information, and educational support.</p>
                    <p className="section-text"><strong>Books and Websites:</strong> There are a variety of books, podcasts, and websites dedicated to ADHD management.</p>
                </div>

                <div className="mental-health-support">
                    <img className="support-image" src={seekHelp} alt="Seek Help" />
                    <h3 className="support-title">Professional Therapy, Done Online</h3>
                    <p className="support-description">BetterHelp makes starting therapy easy. Take the assessment and get matched with a professional, licensed therapist.</p>
                    
                </div>
            </div>
        </main>
    );
};

export default ADHD;
