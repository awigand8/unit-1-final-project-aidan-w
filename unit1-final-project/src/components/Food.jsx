import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const foodData = [
    { id: 1, category: "food", name: "Peacemaker Seafood", description: "Example description", shortdesc: "Short description", image: "/images/peacemakers.webp"},
    { id: 2, category: "food", name: "Crown Candy Kitchen", description: "Example description", shortdesc: "Short description", image: "/images/crowncandy.webp"},
    { id: 3, category: "food", name: "Zias on The Hill", description: "Example description", shortdesc: "Short description", image: "/images/zias.webp"},
    { id: 4, category: "food", name: "Hodaks Restaurant", description: "Example description", shortdesc: "Short description", image: "/images/hodaks.webp"},
];

function Food( { handleAdd }) {
    return (
        <div>
            <DynamicPage title="Food" data={foodData} onAdd={handleAdd} />
            <Copyright />
        </div>
        
    );
}

export default Food;