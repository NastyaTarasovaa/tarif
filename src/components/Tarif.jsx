import React from 'react'
import './Tarif.css'

function tarif(props) {
    return (
        <div className={"tarif-card" + (props.isSelected ? "selected" : "")} >
            <div clasName="tarif-name" style={{ backgroundColor: props.nameColor }}>{props.name}</div>
            <div className="tarif-price" style={{ backgroundColor: props.priceColor }}>{props.price}</div>
            <div className="tarif-speed">{props.speed}</div>
            <div className="tarif-text">{props.text}</div>
        </div>
    );
}

export default tarif