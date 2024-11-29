import { Link } from "react-router-dom";
const ComprehensiveCare =()=>{
    return (
        <div className="comprehensive-care">
            <h2>Comprehensive Care for Your Mental Well-Being</h2>
            <div>We Address:</div>
            <div className="care-components">
            <Link to={'/anxiety'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Anxiety <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path></svg> </div></Link>

            <Link to={'/depression'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Depression <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path></svg></div></Link>

            <Link to={'/stress'} onClick={() => { window.scrollTo(0, 0);}}> <div className="care-component">Stress <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg></div></Link>

            <Link to={'/trauma'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">PTSD & Trauma <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg> </div></Link>

            <Link to={'/personal-growth'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Personal Growth <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg></div></Link>

            <Link to={'/premarital-counselling'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Premaritial Counselling<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg> </div></Link>

            <Link to={'/relationship-concerns'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Relationships Concern <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg></div></Link>

            <Link to={'/marital-discords'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Marital Discords<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>
            <Link to={'/emotional-concern'} onClick={() => { window.scrollTo(0, 0);}}> <div className="care-component">Emotional & Developmental Concerns <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>

            <Link to={'/learning-disabilities'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Learning Disabilities <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>

            <Link to={'/autism'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Autism <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>

            <Link to={'/adhd'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">ADHD <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>

            <Link to={'/workplace-counselling'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Workplace Counsellings<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>

            <Link to={'/mental-wellness'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Mental Wellness Programs <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>

            <Link to={'/employee-assistance-program'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">EAPs Employee Assistance Program <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>
            <Link to={'/executive-coaching'} onClick={() => { window.scrollTo(0, 0);}}><div className="care-component">Executive Coaching <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 7.13537 9.95673 9.83761 13.0288 10.4642L16.9559 11.2651C17.3046 11.3363 17.5553 11.6427 17.556 11.9985C17.5567 12.3544 17.3072 12.6618 16.9588 12.7343L13.2209 13.512C10.1471 14.1516 7.94394 16.8604 7.94394 20H6.44394C6.44394 16.1497 9.14578 12.8278 12.9153 12.0435L13.089 12.0073L12.7291 11.9339C8.95847 11.1649 6.25 7.84824 6.25 4H7.75Z" fill="#033A35"></path>
            </svg>  </div></Link>
                

                
                
                
            </div>
        </div>
    )

}

export default ComprehensiveCare;