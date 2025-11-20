import Copyright from './Copyright';
import DynamicPage from './DynamicPage';

const attractionsData = [
    { id: 1, category: "food", name: "Food1", description: "Example description", shortdesc: "Short description"},
    { id: 2, category: "food", name: "Food2", description: "Example description", shortdesc: "Short description"},
    { id: 3, category: "food", name: "Food3", description: "Example description", shortdesc: "Short description"},
    { id: 4, category: "food", name: "Food4", description: "Example description", shortdesc: "Short description"},
];

function Food( { handleAdd }) {
    return(
        <div>
            <DynamicPage title="Food" data={attractionsData} onAdd={handleAdd} />
            <Copyright />
        </div>
        
    );
}

export default Food;