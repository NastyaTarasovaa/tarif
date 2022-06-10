import React, { useState } from 'react'
import './Tarif.css'

export default function tarif(props) {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="tarif-card">
            <div clasName="tarif-name" style={{ backgroundColor: props.nameColor }}>{props.name}</div>
            <div className="tarif-price" style={{ backgroundColor: props.priceColor }}>{props.price}</div>
            <div className="tarif-speed">{props.speed}</div>
            <div className="tarif-text">{props.text}</div>
            <button className="tarif-button" onClick={handleChange}> {checked ? "Тариф выбран" : "Выберите тариф"}</button>
        </div>
    );
}

