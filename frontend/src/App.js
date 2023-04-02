import React, { useState, useEffect } from 'react';
import VideosList from './components/Videos';
import Pages from './components/Pages';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';


function App() {
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [hdFilter, setHdFilter] = useState(false);
  const [fourKFilter, setFourKFilter] = useState(false);
  const [featureFilterValue, setFeatureFilterValue] = useState([]);
  const [sourceFilterValues, setSourceFilterValues] = useState([]);
  const [sortByName, setSortByName] = useState([]);


  const handleSearch = (searchInput) => {
    setSearchValue(searchInput)
    fetchData()
  }


  const videosPerPage = 9
  
  async function fetchData(pageNumber=1) {
    let fetchUrl = 'http://127.0.0.1:8000/video/'
    if (pageNumber){
      fetchUrl += '?page=' + pageNumber
    }
    if (searchValue){
      fetchUrl += '&search=' + searchValue
    }

    if (hdFilter){
      fetchUrl += "&name__icontains=720"
    }
    else {
      fetchUrl.replace("&name__icontains=720", "")
    }

    if (fourKFilter){
      fetchUrl += "&name__icontains=4k"
    }
    else {
      fetchUrl.replace("&name__icontains=4k", "")
    }

    if (featureFilterValue){
      fetchUrl += "&features=" + featureFilterValue
    }


    if (sourceFilterValues) {
      fetchUrl += "&source__in=" + sourceFilterValues.join(',')
    }

    if (sortByName) {
      if (sortByName==="asc"){
        fetchUrl += "&ordering=name"
      }
      else if (sortByName==="desc"){
        fetchUrl += "&ordering=-name"
      }
    }
    else{
      fetchUrl.replace("&ordering=name", "")
      fetchUrl.replace("&ordering=-name", "")
    }

    console.log(fetchUrl)

    fetch(fetchUrl)
    .then((response) => response.json())
    .then(data => {
      setVideoCount(data.count);

      return data;
    })
    .then((data) => setVideos(data.results))
    .catch((error) => console.error(error));
  }


  useEffect(() => {
    fetchData(1)
  }, [hdFilter, fourKFilter, featureFilterValue, sourceFilterValues, sortByName]);

  let pageNumbers =  Math.ceil(videoCount / videosPerPage)
  console.log(pageNumbers)

  return (
    <div>
    <SearchBar onSearch={handleSearch}/>
    <Filters setHdFilter={setHdFilter} setFourKFilter={setFourKFilter} featureFilterValue={featureFilterValue} setFeatureFilterValue={setFeatureFilterValue}
     sourceFilterValues={sourceFilterValues} setSourceFilterValues={setSourceFilterValues} setSortByName={setSortByName}
    />
    <h1>Videos: </h1>
    <VideosList videos={videos} />
    <Pages pageNumbers={pageNumbers} fetchData={fetchData} searchValue={searchValue}/>
  </div>
  );
}




export default App;
