import React from "react";

const PersonCard = (props) => {
    console.log(props);
    const { personCard } = props; // retrieve each set of values from the list
    return(
        <div className="card">
            <h1>{personCard.lastName}, {personCard.firstName}</h1> {/* retrieve the list index object's values using keys */} 
            <p>Age: {personCard.age}</p>
            <p>Hair Color: {personCard.hairColor}</p>
        </div>
    )
}

export default PersonCard