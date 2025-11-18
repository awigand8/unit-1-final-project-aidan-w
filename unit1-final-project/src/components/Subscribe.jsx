import Copyright from './Copyright';
import Button from './Button';

function Subscribe() {
    return(
        <div className="subscribe">
            <h1>Subscribe to Us!</h1>
            <p>Get the latest updates about attrations and events in STL!</p>

            <form>
                <input
                type="email"
                placeholder="Enter your email"
                required
                />
                <Button text="Subscribe"/>
            </form>
            <Copyright />
        </div>
    );
}

export default Subscribe;