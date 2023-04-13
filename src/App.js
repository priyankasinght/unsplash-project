import { useState } from 'react';
import { LoadImages, SearchImages } from './components/api';
import './App.css';
import Image from './components/image';

function App() {
  const [query, setQuery] = useState();
  const [input, setInput] = useState();
  const data = LoadImages();

  const search = () => {
    setInput(query)
  }
  const searchData = SearchImages(input);
  console.log(searchData);

  return (
    <div className="app-container">
      <div className="navbar">
        <div className="navbar-title">GeekGallery</div>
        <div className="navbar-input">
          <input type='text' onChange={(event) => setQuery(event.target.value)} />
          <button onClick={search}>Search</button>
        </div>
      </div>
      <div className='container'>
        {input ? searchData.map((img, key) => (
          <Image key={key} src={img.urls.thumb} />
        )) : data.map((img, key) => (
          <Image key={key} src={img.urls.thumb} />
        ))}
      </div>
    </div>
  );
}

export default App;
