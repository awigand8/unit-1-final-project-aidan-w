import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const attractionsData = [
    { id: 1, name: "Gateway Arch", description: "Example description"},
    { id: 2, name: "Sculpture Park", description: "Example description"},
    { id: 3, name: "Botanical Gardens", description: "Example description"},
    { id: 4, name: "STL City Game", description: "Example description"},
]

function Attractions() {
    return(
        <div>
            <DynamicPage title="Attractions" data={attractionsData} />
            <Copyright />
        </div>
        
    );
}

export default Attractions;