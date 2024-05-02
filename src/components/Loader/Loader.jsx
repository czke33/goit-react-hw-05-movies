import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import style from './Loader.modul.css';

const Loader = () => {
    return (
        <div className={style.loader}>
            <ThreeDots color="#00BFFF" height={100} width={100} />
        </div>
    );
};
 export default Loader;
