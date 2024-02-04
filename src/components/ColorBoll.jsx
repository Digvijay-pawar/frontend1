import React from 'react';

function ColorBoll(props) {
    const properties = ['rounded-circle', 'mr-1', 'text-white', 'text-center', 'p-2']
    properties.push(`bg-${props.color}`)
    return (
        <span className={properties.join(" ")} style={{ width: "40px", height: "40px" }}>
            <b>{props.number}</b>
        </span>
    );
}

export default ColorBoll;