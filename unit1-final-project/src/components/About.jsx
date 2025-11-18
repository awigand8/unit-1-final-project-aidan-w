import stlpic from '../assets/stlpic.jpg'
import Copyright from './Copyright';

function About() {
    return(
    <div className="aboutus">
        <h1>About Us</h1>
        <img
            src={stlpic} alt="St. Louis skyline at night" className="skyline"/>   
        <p>At Meet Me in STL, our job is to provide the best 
          experience for you when traveling to St.Louis.   
        </p>
        <footer>
            <h3>Contact Us!</h3>
            <p>Email: info@meetmeinstl.com</p>
            <p>Phone: (314) 222-2222</p>
            <Copyright />
        </footer>
        
    </div>
);
}

export default About;