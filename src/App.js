import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import MainScreen from './main-screen/MainScreen';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/main" element={<MainScreen />}/>
    </Routes>
    {/* <Login/> */}
    </>
  );
}

export default App;
