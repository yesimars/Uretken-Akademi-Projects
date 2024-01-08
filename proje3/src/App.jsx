import { Route, Routes,} from 'react-router-dom';
import Movie from './components/Movie';
import AboutMe from './components/AboutMe';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>


    </>
  )
}

export default App
