import React, { useState } from "react";
import Button from './Button';

function DynamicPage({ title, data }) {
    const [selectedItem, setSelectedItem] = useState(null)
    return (
        <div className="dynamic-container">
            {selectedItem ? (
                <>
                <h1>{selectedItem.name}</h1>
            <p>{selectedItem.description}</p>
            <Button label="Back" onClick={() => setSelectedItem(null)} className="back-button" />
                </>
            ) : (
                <>
                <h1>{title}</h1>
                {data.map((item) => (
                    <Button
                    key={item.id}
                    label={item.name}
                    onClick={() => setSelectedItem(item)}
                    />
                ))}
                </>
            )}
        </div>
    );
}

export default DynamicPage;