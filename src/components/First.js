import React from 'react';

function First({history}) {
    const go=()=>{
        history.push('/second/Manu');
    }
    return (
        <div>
            <h1>This is First Component</h1>
            <button onClick={()=>{go()}}>Go</button>
        </div>
    );
}

export default First;