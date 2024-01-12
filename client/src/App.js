import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MyPages from './pages/MyPages';
import './App.css';
import Common from './pages/Common';
import Detail from './pages/Detail';
import Intro from './pages/Intro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Common/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/myPages' element={<MyPages/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/intro' element={<Intro/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
