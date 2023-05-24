import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MainWindow from './components/MainWindow';

function App() { 
  // let [searchText, setSearchText] = useState([]);
  let [videoList, setVideoList] = useState([]);
  return (
    <div className="App">
      <h1>VideoTube</h1>
      <SearchBar searchData={setVideoList}/>
      <MainWindow searchData={videoList}/>
    </div>
  );
}

export default App;
