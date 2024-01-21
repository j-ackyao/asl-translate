import './App.css';


import HomePage from './pages/HomePage';
import TranslationPage from './pages/TranslationPage';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={HomePage}></Route>
          <Route path="/translate" Component={TranslationPage}></Route>
        </Routes >
      </div >
    </Router>
  );
}

export default App;
