import React from 'react';
import s from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={s.lds_hourglass}></div> 
    );
};

export default Loader;