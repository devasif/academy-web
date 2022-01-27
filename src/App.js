import { Navigate, BrowserRouter ,Route, Routes, Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Result from './Components/Result/Result';
import SignUp from './Components/SignUp/SingUp';


function App() {
  const user = localStorage.getItem("token");
  return (
    // <BrowserRouter>
    // <h3>hello world</h3>
    // <Route path="/" exact >
    //   <Home/>
    // </Route>
   
    // </BrowserRouter>
    <BrowserRouter>
      <>
      <Header/>
        
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          {/* {user && <Route path="/" exact element={<Main />} />} */}
          <Route path="/signup" exact element={<SignUp />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/result" exact element={<Result />}></Route>
          
          {/* <Route path="/" exact><Navigate replace to="/login"/></Route> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
