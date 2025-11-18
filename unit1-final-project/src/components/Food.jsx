import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const attractionsData = [
    { id: 1, name: "Food1", description: "Example description"},
    { id: 2, name: "Food2", description: "Example description"},
    { id: 3, name: "Food3", description: "Example description"},
    { id: 4, name: "Food4", description: "Example description"},
]

function Food() {
    return(
        <div>
            <DynamicPage title="Food" data={attractionsData} />
            <Copyright />
        </div>
        
    );
}

export default Food;