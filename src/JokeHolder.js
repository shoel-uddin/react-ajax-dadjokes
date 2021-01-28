import React from 'react';

function JokeHolder({joke, deleteJoke}) { //instead of 'props' use destructure { joke, deleteJoke}
    return (
        <section>
            <h3>All Jokes</h3>
            {
                joke.map(joke => (
                    <p key={joke.id}>
                        {joke.joke}
                        <button
                            onClick={() => {deleteJoke(joke.id)}
                            }
                        >Delete</button>
                    </p>
                ))
            }
            {/* <p>{props.joke}</p> */}
        </section>
    )
        
}

export default JokeHolder;