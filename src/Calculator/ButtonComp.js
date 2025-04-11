import React from 'react';
import Button from './Button';

const ButtonComp = ({ handleClick, handleClear }) => {
  let buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='button-elements'>
        {buttons.map((btn) => (
          <Button key={btn} btn={btn} handleClick={handleClick} handleClear={handleClear}
          />
        ))}
        <Button btn="C" handleClick={handleClick} handleClear={handleClear}/>
      </div>
    </form>
  );
};

export default ButtonComp;
