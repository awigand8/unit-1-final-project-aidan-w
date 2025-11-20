import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const attractionsData = [
    { id: 1, category: "attraction", name: "Gateway Arch", description: "Example description", shortdesc: "Short description", image: "/images/arch.jpg"},
    { id: 2, category: "attraction", name: "Sculpture Park", description: "Example description", shortdesc: "Short description", image: "/images/sculpture park.webp"},
    { id: 3, category: "attraction", name: "Botanical Gardens", description: "Example description", shortdesc: "Short description", image: "/images/botanicalgarden.jpg"},
    { id: 4, category: "attraction", name: "STL City Game", description: "Example description", shortdesc: "Short description", image: "/images/stlcitygame.jpg"},
];

function Attractions( { handleAdd }) {
    return(
        <div>
            <DynamicPage title="Attractions" data={attractionsData} onAdd={handleAdd}/>
            <Copyright />
        </div>
    );
}

export default Attractions;