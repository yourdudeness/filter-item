import React from 'react';

const Monsters = ({data}) => {
    console.log(data)
    return (
        <div>
            {data.name}
        </div>
    );
};

export default Monsters;