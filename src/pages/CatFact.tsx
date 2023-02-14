import React, { useState, useEffect } from "react";
import styled from 'styled-components';

interface CatFactType {
  fact: string;
}

const CatFact = () => {
  const [fact, setFact] = useState<string>("");
  // the counter state is initialized using a function that checks if there's a saved counter value in Local Storage and returns it if it exists, otherwise it returns 0.
  const [counter, setCounter] = useState<number>(() => {
    const savedCounter = localStorage.getItem("counter");
    return savedCounter ? parseInt(savedCounter) : 0;
  });

  const fetchCatFact = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const data: CatFactType = await res.json();
    setFact(data.fact);
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", counter.toString());
  }, [counter]);

  const handleClick = () => {
    setCounter(counter + 1);
    fetchCatFact();
  };

  return (
    <div>
      <Title>{fact}</Title>
      <Button onClick={handleClick}>Refresh</Button>
      <Paragraph>Refresh button pressed {counter} times</Paragraph>
    </div>
  );
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: #000000;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 14px 24px 16px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  transition: transform 200ms,background 200ms;
  : &:hover {
    transform: translateY(-2px);
  }
`

const Paragraph = styled.p`
  text-align: center;
`;
export default CatFact