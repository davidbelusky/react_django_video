import React, { useState } from 'react';



const Filters = ({setHdFilter , setFourKFilter, featureFilterValue, setFeatureFilterValue, sourceFilterValues, setSourceFilterValues, setSortByName}) => {
    const SOURCES = ['DEMO_BITCODIN', 'DEMO_NIMBLE_STREAMER', 'DEMO_MICROSOFT', 'DEMO_AZURE_MEDIA_SERVICES', 'DEMO_DASH_IF', 'DEMO_METACDN', 'DEMO_UPLYNK', 'DEMO_APPLE', 'DEMO_UNIFIED_STREAMING', 'DEMO_SHAKA', 'DEMO_AXINOM', 'DEMO_IRT', 'DEMO_GPAC']
    const [isCheckedHd, setIsCheckedHd] = useState(false);
    const [isCheckedFourK, setIsCheckedFourK] = useState(false);
    const [isCheckedSortNameAsc, setIsCheckedSortNameAsc] = useState(false);
    const [isCheckedSortNameDesc, setIsCheckedSortNameDesc] = useState(false);


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

    const handleInputChange = (e) => {
      setFeatureFilterValue(e.target.value);
    }


    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        setFeatureFilterValue(event.target.value);
      }
    };

    const handleCheckboxSources = (event) => {
      if (event.target.checked){
        setSourceFilterValues([...sourceFilterValues, event.target.name])
      }
      else{
        setSourceFilterValues(sourceFilterValues.filter(item => item !== event.target.name));
      }
    };

    const handleSortByNameAsc = (event) => {
      if (event.target.checked){
        setIsCheckedSortNameAsc(true)
        setIsCheckedSortNameDesc(false)
        setSortByName("asc")
      }
      else{
        setIsCheckedSortNameAsc(false)
        setSortByName("")
      }
    }

    const handleSortByNameDesc = (event) => {
      if (event.target.checked){
        setIsCheckedSortNameDesc(true)
        setIsCheckedSortNameAsc(false)
        setSortByName("desc")
      }
      else{
        setIsCheckedSortNameDesc(false)
        setSortByName("")
      }
    }


    return (
      <div className='filters'>
      <div className='quality-and-feature-filter'>
       <h3>Filters:</h3>
       <h4>Quality:</h4>
       <label>
       <input type="checkbox" checked={isCheckedHd} onChange={handleCheckboxHd}/>
            720p
       </label>
       <label>
       <input type="checkbox" checked={isCheckedFourK} onChange={handleCheckboxFourK}/>
            4K
       </label>
       <h4>Feature:</h4>
       <form onSubmit={handleInputChange}>
        <input
          type="text"
          placeholder="Search"
          value={featureFilterValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </form>
      <h4>Sort by:</h4>
          <label className='source'>
        <br/>
        <input type="checkbox" checked={isCheckedSortNameAsc} onChange={handleSortByNameAsc} name="asc"/>
              Name - Asc
        </label>
        <label className='source'>
        <br/>
        <input type="checkbox" checked={isCheckedSortNameDesc} onChange={handleSortByNameDesc} name="desc"/>
              Name - Desc
        </label>
      
      </div>
      <div className='sources-filter'>
        <div className='sources'>
      <h4>Sources:</h4>
        {SOURCES.map((source) => (
          <label className='source'>
        <br/>
        <input type="checkbox" onChange={handleCheckboxSources} name={source}/>
              {source}
        </label>
        ))}
        </div>
        </div>
      </div>
    );
  };
  

  export default Filters;