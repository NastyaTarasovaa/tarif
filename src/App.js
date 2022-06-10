import React from 'react';
import Tarif from './components/Tarif'
import './App.css';

const tarifs = [
  {name: "Безлимитный 300", price: "300 руб./мес", speed: "до 10 Мбит/сек", text: "Объем включенного трафика не ограничен", priceColor: "rgba(44,193,213,255)", nameColor:"rgba(34,156,171,255)" },
  {name: "Безлимитный 450", price: "450 руб./мес", speed: "до 50 Мбит/сек", text: "Объем включенного трафика не ограничен",priceColor: "rgba(36,174,141,255)", nameColor: "rgba(32,135,114,255)" },
  {name: "Безлимитный 550", price: "550 руб./мес", speed: "до 100 Мбит/сек", text: "Объем включенного трафика не ограничен",priceColor: "rgba(244,106,95,255)", nameColor: "rgba(196,85,78,255)"},
  {name: "Безлимитный 1100", price: "1000 руб./мес", speed: "до 200 Мбит/сек", text: "Объем включенного трафика не ограничен",priceColor: "rgba(51,58,68,255)", nameColor: "rgba(40,47,55,255)" },
 
];

class App extends React.Component {
  render () {
  return (
    <div className="App">
      {
        tarifs.map((tarif)=>
        <Tarif name={tarif.name} price={tarif.price} speed={tarif.speed} text={tarif.text} priceColor={tarif.priceColor} nameColor={tarif.nameColor}></Tarif>
        )
      }
      
    </div>
  );
}
}

export default App;
