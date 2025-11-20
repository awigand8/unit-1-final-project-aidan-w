import Copyright from './Copyright';

function About() {
    return(
    <div className="aboutus">
        <h1>About Us</h1>
        <img
            src="/images/stlpic.jpg" alt="St. Louis skyline at night" className="skyline"/>   
        <p>At Meet Me in STL, our job is to provide the best 
          experience for you when traveling to St.Louis.   
        </p>
        <footer>
            <h3>Contact Us!</h3>
            <table className="contact-table">
                <tbody>
                    <tr>
                        <td>Email:</td>
                        <td>info@meetmeinstl.com</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>(314)222-2222</td>
                    </tr>
                    <tr>
                        <td>Facebook:</td>
                        <td>
                            <img src="/images/react-icons/square-facebook-brands-solid-full.svg" alt="Facebook" className="social-icon" />
                            MeetMeInSTL
                            </td>
                    </tr>
                    <tr>
                        <td>Instagram:</td>
                         <td>
                            <img src="/images/react-icons/square-instagram-brands-solid-full.svg" alt="Instagram" className="social-icon" />
                            @MeetMeInSTL
                            </td>
                    </tr>
                </tbody>
            </table>
            <Copyright />
        </footer>
        
    </div>
);
}

export default About;    
