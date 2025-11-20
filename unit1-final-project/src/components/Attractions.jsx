import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const attractionsData = [
    { id: 1, name: "Gateway Arch", description: "Example description", shortdesc: "Short description", image: "/images/arch.jpg"},
    { id: 2, name: "Sculpture Park", description: "Example description", shortdesc: "Example description", image: "/images/sculpture park.webp"},
    { id: 3, name: "Botanical Gardens", description: "Example description", shortdesc: "Example description", image: "/images/botanicalgarden.jpg"},
    { id: 4, name: "STL City Game", description: "Example description", shortdesc: "Example description", image: "/images/stlcitygame.jpg"},
];

function Attractions() {
    return(
        <div>
            <DynamicPage title="Attractions" data={attractionsData} />
            <Copyright />
        </div>
    );
}

export default Attractions;