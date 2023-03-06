
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import BasicExample from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    
    <>
    <Router>
    <BasicExample title="TextUtils"/>
    <Alert alert={alert}/>
    <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text"/>}/>
              <Route exact path="/about" element={<About/>}/>
            </Routes>
      </div>
      </Router>
    </>
  

  );
}

export default App;
 