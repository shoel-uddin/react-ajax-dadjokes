// eslint-disable-next-line
import React from "react";

async function GetJoke(){
    const jokePromise = fetch('https://icanhazdadjoke.com', {
    headers: {
        accept: 'application/json'
    }
    })
  const response = await jokePromise;
  const jokeData = await response.json();

  console.log(jokeData.joke);
  }

export default GetJoke;