import './App.css';


import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import TranslationPage from './pages/TranslationPage';

import { HashRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={HomePage}></Route>
          <Route path="/translate" Component={TranslationPage}></Route>
          <Route path="/quiz" Component={QuizPage}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
