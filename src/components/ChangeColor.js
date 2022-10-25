import React, { useState } from 'react';

const ChangeColor = () => {
    const [color, setColor] = useState('');
    return (
        <>
         <input type="text"
         onChange={e => {
            setColor(e.target.value);
         }} />
         <button>CHANGE COLOR</button>
        </>
    );
};


export default ChangeColor;