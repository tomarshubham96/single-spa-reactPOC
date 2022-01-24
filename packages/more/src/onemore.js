import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from 'store/counterSlice';

export default function Onemore(props) {
    React.useEffect(()=>{
        console.log('One More',props.store)
    },[props])
  const count = useSelector(selectCount);
  return (
    <div className="footer">
      <p>More Footer {count}</p>
    </div>
  );
}
