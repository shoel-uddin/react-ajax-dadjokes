import React from 'react';

function JokeButton(props){
    return(
        <button
            onClick={props.handleClick}>
            New Joke?
        </button>
    )
}


export default JokeButton;