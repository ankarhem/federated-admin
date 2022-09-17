import React from 'react';

type Props = {};

function Button({}: Props) {
  const [count, setCount] = React.useState(0);
  console.log(count);
  return (
    <button onClick={() => setCount(count + 1)} className='btn btn-primary'>
      Click
    </button>
  );
}

export default Button;
