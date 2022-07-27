import React, { useState } from 'react';
import { PopUpVisabilityContext } from '../context/PopUpVisabilityContext';

const VisabilityProvider = ({children, ...props}) => {

    const [visability, setVisability] = useState(true);

    function HideOrShow (visability){
        setVisability(visability)
    }

    return (
       <PopUpVisabilityContext.Provider 
        value={{
            visability,
            HideOrShow
        }}
        {...props}
       >
        {children}  
       </PopUpVisabilityContext.Provider>
    );
};

export default VisabilityProvider;