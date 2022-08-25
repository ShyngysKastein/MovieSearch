import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SearchTVShows from './containers/searchTvShows/searchTvShows';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
    <Route index element={<SearchTVShows/>}/>
    <Route path='/shows/:id' element={<SearchTVShows/>}/>
      </Route>
    </Routes>
  );
}

export default App;
