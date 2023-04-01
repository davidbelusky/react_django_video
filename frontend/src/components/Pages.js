import React from 'react';



const Pages = ({ pageNumbers, fetchData, searchValue }) => {
    const pageButtons = Array.from({ length: pageNumbers }, (_, index) => (
        <button key={index} onClick={event => fetchData(index+1, searchValue)} >{index + 1}</button>
      ));

    return (
      <div className="pages">
       {pageButtons}
      </div>
    );
  };
  

  export default Pages;