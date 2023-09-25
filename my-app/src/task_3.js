import React, { useState } from 'react';
function DecInc(){
const [number , setNumber] = useState(0);

    function increment (){
        setNumber ( number + 1)
    }

    function decrement (){
        setNumber ( number - 1)
    }
    return (

        <div>

            <h1>The numbere : {number}</h1>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>


        </div>

    )
};
    export default DecInc;