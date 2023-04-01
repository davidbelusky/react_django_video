import React, { useState } from 'react';



const Filters = ({setHdFilter , setFourKFilter}) => {
    const [isCheckedHd, setIsCheckedHd] = useState(false);
    const [isCheckedFourK, setIsCheckedFourK] = useState(false);


    const handleCheckboxHd = (event) => {
        setHdFilter(event.target.checked)
        if (event.target.checked){
            setIsCheckedFourK(false)
        }
        setIsCheckedHd(event.target.checked)

        setFourKFilter(false)
      };
    
    const handleCheckboxFourK = (event) => {
        setFourKFilter(event.target.checked)
        if (event.target.checked){
            setIsCheckedHd(false)
        }
        setIsCheckedFourK(event.target.checked)

        setHdFilter(false)
    };

    return (
      <div>
       <h4>Filters:</h4>
       <label>
       <input type="checkbox" checked={isCheckedHd} onChange={handleCheckboxHd}/>
            720p
       </label>
       <label>
       <input type="checkbox" checked={isCheckedFourK} onChange={handleCheckboxFourK}/>
            4K
       </label>
      </div>
    );
  };
  

  export default Filters;