import React from 'react';

const Buttton = (props: string | any) => {
  return (
    <>
      <button style={{ backgroundColor: 'black', color: 'white' }}>
        {props.label}
      </button>
    </>
  );
};

export default Buttton;
