import { useState } from 'react';
import './App.css';
// import GetJoke from './GetJoke';
import Header from './Header';
import JokeButton from './JokeButton'
import JokeHolder from './JokeHolder';


function App() {
  
  //const [joke, setJoke] = useState("")
  const [jokeArray, setJokeArray] = useState([]) //or ([]) for Array || ([" "]) for single item

  async function getJoke(){
    const jokePromise = fetch('https://icanhazdadjoke.com', {
    headers: {
        accept: 'application/json'
    }
    })
      const response = await jokePromise;
      const jokeData = await response.json();

      console.log(jokeData.joke);
      //setJoke(jokeData.joke)
      setJokeArray([
        ...jokeArray,
        jokeData
      ]);
  }

    
        // This is used if importing the function
      //GetJoke()
  

  
  //console.log('Here is the Joke:', joke);
  function deleteJoke(id){
    console.log(`wanna Delete ${id}?`);
    const filteredArray = jokeArray.filter(j => j.id !== id)
    // const filteredArray = jokeArray.filter(j => {
    //   if (j.id === id) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    setJokeArray(filteredArray)


  }

  return (
    <div className="App">
      <Header />
      <JokeButton handleClick={getJoke}/>
      <JokeHolder 
        joke={jokeArray}
        deleteJoke={deleteJoke}
      />
    </div>
  );
}

export default App;
