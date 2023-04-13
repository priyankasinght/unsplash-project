import { useState, useEffect } from 'react';

const LoadImages = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://api.unsplash.com/photos?client_id=ypo6abJTyDvFm1VOWJVP8zphdtmDtT9U-_xEqs19YdI")
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.log(error));
  }, []);
  return images;
}

const SearchImages = (query) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=ypo6abJTyDvFm1VOWJVP8zphdtmDtT9U-_xEqs19YdI`)
      .then(response => response.json())
      .then(data => setImages(data.results))
      .catch(error => console.log(error));
  }, [query]);
  return images;
}

export { LoadImages, SearchImages };
