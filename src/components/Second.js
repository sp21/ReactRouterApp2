import React from 'react';

function Second({match}) {
    return (
        <div>
            <h2>This is Second Component</h2>
            Welcome:{match.params.name}
        </div>
    );
}

export default Second;