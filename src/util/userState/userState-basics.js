import React, { useState } from 'react';

const UserStateBasic = () => {
  console.log(useState());
  const [text, setText] = useState('reandom title');
  const handleClick = () => {
    if (text === 'random title') {
      setText(`I'm a developer`);
      return;
    }
    setText(`random title`);
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UserStateBasic;
