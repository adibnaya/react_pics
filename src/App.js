import { useState } from 'react';
import searchImages from './api';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
  const [results, setResults] = useState([]);

  const handleSubmit = async (term) => {
    setResults(await searchImages(term));
  };

  return(
    <div className="app">
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={results}/>
    </div>
  );
}

export default App;