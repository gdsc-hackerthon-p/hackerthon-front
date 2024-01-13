import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MyPages from './pages/MyPages';
import './App.css';
import Common from './pages/Common';
import Detail from './pages/Detail';
import Intro from './pages/Intro';

import Login from './pages/Login'
import SignUp from './pages/SignUp';
import Knowledge1 from './pages/Knowledge/Knowledge1';
import Knowledge2 from './pages/Knowledge/Knowledge2';
import Knowledge3 from './pages/Knowledge/Knowledge3';
import Knowledge4 from './pages/Knowledge/Knowledge4';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Common/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/myPages' element={<MyPages/>}/>
          <Route path='/detail/:name' element={<Detail/>}/>
          <Route path='/intro' element={<Intro/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/knowledge1' element={<Knowledge1/>}/>
          <Route path='/knowledge2' element={<Knowledge2/>}/>
          <Route path='/knowledge3' element={<Knowledge3/>}/>
          <Route path='/knowledge4' element={<Knowledge4/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
