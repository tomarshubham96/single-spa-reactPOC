import React from "react";
import More from 'mfMore/more';
import { useSelector } from 'react-redux';
import { selectCount } from 'store/counterSlice';
import './Footer.css';

export default function MainFooter (){
    const count = useSelector(selectCount);
    return (
        <>
            <div className="footer">
                <p>Footer {count}</p>
            </div>
            <More/>
        </>
    );
  }

