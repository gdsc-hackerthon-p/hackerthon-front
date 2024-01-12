import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MyPage from './pages/MyPages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/myPages' element={<MyPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
