import React, { useState, useEffect } from "react";

interface CatFactType {
 fact: string;
}

const CatFact = () => {
 const [fact, setFact] = useState<string>("");
 const [counter, setCounter] = useState<number>(0);

 useEffect(() => {
  fetch("https://catfact.ninja/fact")
   .then(res => res.json())
   .then((data: CatFactType) => {
    setFact(data.fact);
   });
 }, []);

 const handleClick = () => {
  setCounter(counter + 1);
  fetch("https://catfact.ninja/fact")
   .then(res => res.json())
   .then((data: CatFactType) => {
    setFact(data.fact);
   });
 };

 return (
  <div>
   <h1>{fact}</h1>
   <button onClick={handleClick}>Refresh</button>
   <p>Refresh button pressed {counter} times</p>
  </div>
 );
}

export default CatFact